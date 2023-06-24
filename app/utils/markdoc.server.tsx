import { parse, transform, type RenderableTreeNodes } from "@markdoc/markdoc";

const fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
    },
  },
};

export function markdownParser(markdown: string): RenderableTreeNodes {
  return transform(parse(markdown), { nodes: { fence } });
}
