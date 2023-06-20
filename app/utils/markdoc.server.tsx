import { parse, transform, type RenderableTreeNodes } from "@markdoc/markdoc";
// import PrismJsx from 'prismjs/components/prism-jsx.min';

export function markdownParser(markdown: string): RenderableTreeNodes {
  return transform(parse(markdown));
}
