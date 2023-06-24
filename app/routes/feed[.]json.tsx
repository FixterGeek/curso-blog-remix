import { type LoaderFunction } from "@remix-run/node";
// import { getFeed } from "~/utils/feed.server";

export const loader: LoaderFunction = async () => {
  // const feed = await getFeed("json1");
  return new Response(
    `{"json":"format"}`, // <= 🛠️ Sustitúye
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-content-type-options": "nosniff",
      },
    }
  );
};
