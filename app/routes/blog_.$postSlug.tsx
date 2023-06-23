import type { RenderableTreeNodes } from "@markdoc/markdoc";
import {
  type V2_MetaFunction,
  type LinksFunction,
  type LoaderArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { ContentToJSX } from "~/components/ContentToJSX.client";
import { db } from "~/utils/db";
import { markdownParser } from "~/utils/markdoc.server";
import Avatar from "~/components/Avatar";
import type { Post, User } from "@prisma/client";
import styles from "~/styles/prismjs.css";
import markdownStyles from "~/styles/markdown.css";
import { getBasicMetaData } from "./blog";

export const meta: V2_MetaFunction = ({ data }) => {
  return getBasicMetaData({
    title: `Lee ahora: ${data.post.title}`,
    extra: [
      { property: "og:description", content: data.post.body.slice(1, 30) },
    ],
  });
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: markdownStyles,
  },
];

type LoaderData = {
  content: RenderableTreeNodes;
  post: Post & { author: User };
};
export const loader = async ({ params }: LoaderArgs) => {
  const post = await db.post.findUnique({
    where: { slug: params.postSlug },
    select: {
      title: true,
      body: true,
      createdAt: true,
      author: true,
    },
  });
  const content = await markdownParser(post.body);
  return { content, post };
};

export default function PostDetail() {
  // we are ignoring This TS alert
  const { content, post } = useLoaderData<LoaderData>();

  return (
    <>
      <main className="max-w-2xl mx-auto py-20 ">
        <Avatar date={new Date(post.createdAt)} author={post.author} />
        <Suspense fallback={<p>Cargando...</p>}>
          <ContentToJSX content={content} />
        </Suspense>
      </main>
    </>
  );
}
