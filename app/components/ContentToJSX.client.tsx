import { type RenderableTreeNodes, renderers } from "@markdoc/markdoc";
import React from "react";

export function ContentToJSX({ content }: { content: RenderableTreeNodes }) {
  return <>{renderers.react(content, React)}</>;
}
