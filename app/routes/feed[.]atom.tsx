import { type LoaderFunction } from "@remix-run/node";
import { getFeed } from "~/utils/feed.server";

export const loader: LoaderFunction = async () => {
  const feed = await getFeed("atom1");
  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "x-content-type-options": "nosniff",
    },
  });
};
