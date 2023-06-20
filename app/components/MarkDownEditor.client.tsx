import { signal } from "@preact/signals-react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { Suspense } from "react";
import { ContentToJSX } from "./ContentToJSX.client";
import type { RenderableTreeNodes } from "@markdoc/markdoc";
import { twMerge } from "tailwind-merge";

const mode = signal<"view" | "edit" | "both">("both");

export default function MarkdownEditor({
  onChange,
  content,
  defaultValue = "# Esto es un H1  \n## Esto es un H2  \n###### Y esto es un H6",
}: {
  content: RenderableTreeNodes;
  onChange?: (value: string) => void;
  defaultValue?: string;
}) {
  const state = signal(defaultValue);
  const handleChange = (value: string) => {
    state.value = value;
    if (onChange) onChange(value);
  };

  const handleToggle = () => {
    if (mode.value === "view") {
      mode.value = "edit";
    } else if (mode.value === "edit") {
      mode.value = "both";
    } else {
      mode.value = "view";
    }
    console.log("Terminó ", mode);
  };
  console.log("Señal ", mode.value);
  return (
    <>
      <nav className="flex gap-4 py-2">
        <button
          className="border rounded-2xl py-1 px-4 active:bg-slate-700"
          onClick={handleToggle}
        >
          Toggle view
        </button>
      </nav>
      <div
        className={twMerge(
          "grid grid-cols-2 min-h-[60vh] overflow-hidden",
          mode.value !== "both" && "grid-cols-1"
        )}
      >
        {mode.value !== "view" && (
          <CodeMirror
            className="flex-1"
            value={state.value}
            height="100%"
            onChange={handleChange}
            theme={dracula}
            extensions={[
              markdown({ base: markdownLanguage, codeLanguages: languages }),
              javascript({ jsx: true }),
            ]}
          />
        )}
        {mode.value !== "edit" && (
          <Suspense fallback={null}>
            <div className="flex-2 border border-dashed p-2">
              <ContentToJSX content={content} />
            </div>
          </Suspense>
        )}
      </div>
    </>
  );
}
