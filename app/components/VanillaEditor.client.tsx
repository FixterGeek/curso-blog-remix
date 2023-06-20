import { useCallback, useEffect, useRef } from "react";
import { signal } from "@preact/signals-react";

//USAGE:
{
  /* <Suspense fallback={<h2>Cargando...</h2>}>
<VanillaEditor />
</Suspense> */
}

declare global {
  const EditorJS: unknown;
  const Header: unknown;
}

const DEFAULT_INITIAL_DATA = {
  version: "2.15.0",
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my blissmo editor!",
        level: 1,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Hello blissmo",
      },
    },
  ],
};

const init = signal(0);

export default function VanillaEditor() {
  const editor = useRef();

  const setScript = useCallback((src: string, cb = () => undefined) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = cb;
    document.body.appendChild(script);
  }, []);

  const setScripts = useCallback(() => {
    // plugins
    setScript("https://cdn.jsdelivr.net/npm/@editorjs/header@latest");
    // editor
    setScript("https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest", () => {
      const holder = document.createElement("div");
      holder.id = "holder";
      const container = document.querySelector("#container");
      container?.appendChild(holder);
      editor.current = new EditorJS({
        tools: { header: Header },
        holder: "holder",
        data: DEFAULT_INITIAL_DATA,
      });
    });
  }, [setScript]);

  useEffect(() => {
    console.log("Signal", init);
    if (window && init.value < 1) {
      setScripts();
      init.value++;
    }
  }, [setScripts]);

  return <main id="container"></main>;
}
