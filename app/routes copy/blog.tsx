import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BlogCard } from "~/components/BlogCard";
import { db } from "~/utils/db";
import type { ReadPostType } from "~/utils/zod";

type LoaderData = {
  posts: ReadPostType[];
};
export const loader: LoaderFunction = async () => {
  const posts = await db.post.findMany({
    where: { published: true },
    select: {
      title: true,
      createdAt: true,
      author: true,
      id: true,
      slug: true,
      cover: true,
    },
  });
  return { posts };
};

export default function Blog() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <article className="dark:bg-slate-800 min-h-screen">
      <main className="max-w-3xl mx-auto py-20 px-4 flex justify-between gap-4 items-center ">
        <div>
          <h2 className="font-medium text-4xl text-white">
            ¡Hola! 👋🏼 Bienvenid@ a mi jardín digital. 🪴
          </h2>
          <p className="text-2xl font-thin my-4 text-gray-200">
            Soy @blissmo 🤓 y me gusta compartir lo que aprendo sobre desarrollo
            web independiente.
          </p>
          <p className="text-2xl my-4 text-gray-200">
            Ultimamente intento escribir y narrar bien. ✍🏼
          </p>
        </div>
        <img
          className="rounded-3xl max-w-xs hover:rotate-3 hover:scale-105 transition-all"
          src="https://i.imgur.com/OtuQ5J8.png"
          alt="Chilango at Prague"
        />
      </main>
      <section className="max-w-3xl mx-auto py-4 flex gap-4 flex-wrap">
        {posts.map((post) => (
          <BlogCard {...post} key={post.id} />
        ))}
        {/* <BlogCard
          createdAt={"6/19/2023"}
          title="Post de prueba"
          slug="post-de-prueba"
          cover="https://i.imgur.com/YH7iDl1.png"
        /> */}
      </section>

      {posts.length < 1 && (
        <p className="bg-gray-600 text-gray-200 text-center py-12 max-w-3xl mx-auto block rounded-2xl text-xl font-thin hover:scale-95 transition-all">
          {" "}
          No he escrito nada aún 😥{" "}
        </p>
      )}
    </article>
  );
}
