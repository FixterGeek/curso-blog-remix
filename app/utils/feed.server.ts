import { Feed } from "feed";
import { db } from "~/utils/db";

const generateFeed = async () => {
  const feed = new Feed({
    title: "Blissmo blog",
    description: "¡Mantente notificado de nuevos posts!",
    id: "https://curso-blog-remix.netlify.app",
    link: "https://curso-blog-remix.netlify.app",
    language: "es", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://i.imgur.com/LywcMSq.png",
    favicon: "https://i.imgur.com/nVMrb56.png",
    copyright: "All rights reserved 2023, Héctorbliss",
    updated: new Date(2023, 6, 24), // optional, default = today
    feedLinks: {
      json: "https://curso-blog-remix.netlify.app/json",
      atom: "https://curso-blog-remix.netlify.app/atom",
      rss: "https://curso-blog-remix.netlify.app/rss2.xml",
    },
    author: {
      name: "Héctorbliss",
      email: "fixtergeek@gmail.com",
      link: "https://hectorbliss.com",
    },
  });
  // get the post from DB
  const posts = await db.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  // add the posts
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://curso-blog-remix.netlify.app/blog/${post.slug}`,
      link: `https://curso-blog-remix.netlify.app/blog/${post.slug}`,
      description: post.body.slice(1, 30),
      content: post.body,
      author: [
        {
          name: post.author.name ?? "",
          email: post.author.email,
          link: post.author.email,
        },
      ],
      contributor: [
        {
          name: "Brenda Ortega",
          email: "brenda@fixter.org",
          link: "https://www.brendago.design/",
        },
      ],
      date: post.createdAt,
      image: post.cover ?? "",
    });
  });
  return feed;
};

export const getFeed = async (
  type: "atom1" | "rss2" | "json1" = "rss2"
): Promise<string> => {
  const feed = await generateFeed();
  return type === "rss2"
    ? feed.rss2()
    : type === "atom1"
    ? feed.atom1()
    : feed.json1();
};
