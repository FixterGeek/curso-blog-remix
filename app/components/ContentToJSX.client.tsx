import { type RenderableTreeNodes, renderers } from "@markdoc/markdoc";
import React, { useLayoutEffect, type ReactNode } from "react";
import prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx";
import PrismTsx from "prismjs/components/prism-tsx";

type FecneProps = { children: ReactNode; language: string };
function Fence({ children, language }: FecneProps) {
  return (
    <pre key={language}>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}

export function ContentToJSX({ content }: { content: RenderableTreeNodes }) {
  useLayoutEffect(() => {
    prism.highlightAll();
  }, []);
  return (
    <>
      {renderers.react(content, React, {
        components: { Fence, PrismJsx, PrismTsx },
      })}
    </>
  );
}
