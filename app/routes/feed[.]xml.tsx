import { type LoaderFunction } from "@remix-run/node";
// import { getFeed } from "~/utils/feed.server";

export const loader: LoaderFunction = async () => {
  // const feed = await getFeed("rss2");
  return new Response(
    `<xml tags>`, // <= 🛠️ Sustitúye
    {
      headers: {
        "Content-Type": "application/rss+xml;  charset=utf-8",
        "x-content-type-options": "nosniff",
      },
    }
  );
};
