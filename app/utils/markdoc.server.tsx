import { parse, transform, type RenderableTreeNodes } from "@markdoc/markdoc";

export function markdownParser(markdown: string): RenderableTreeNodes {
  return transform(parse(markdown));
}
