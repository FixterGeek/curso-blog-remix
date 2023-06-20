import type { RenderableTreeNodes } from "@markdoc/markdoc";
import { type LinksFunction, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Suspense, useEffect, useLayoutEffect } from "react";
import { ContentToJSX } from "~/components/ContentToJSX.client";
import { db } from "~/utils/db";
import { markdownParser } from "~/utils/markdoc.server";
import styles from "~/styles/prismjs.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

type LoaderData = {
  content: RenderableTreeNodes;
};
export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.post.findUnique({
    where: { slug: params.postSlug },
    select: {
      body: true,
    },
  });
  const content = await markdownParser(post.body);
  return { content };
};

export default function PostDetail() {
  const { content } = useLoaderData<LoaderData>();

  return (
    <>
      <Suspense fallback={<p>Cargando...</p>}>
        <ContentToJSX content={content} />
      </Suspense>
    </>
  );
}
