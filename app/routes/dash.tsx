// import type { Post } from "@prisma/client"; // <= 🛠️ Descomenta opción 1
// import { ReadPostType } from "~/utils/zod"; // <= 🛠️ Descomenta opción 2
import {
  // redirect, // <= 🛠️ Descomenta
  type ActionFunction,
  type LoaderFunction,
} from "@remix-run/node";
import {
  Form,
  // useLoaderData, // <= 🛠️ Descomenta
  useNavigation,
} from "@remix-run/react";
// import slugify from "slugify"; // <= 🛠️ Descomenta
// import { PostCard } from "~/components/PostCard"; // <= 🛠️ Descomenta
// import { db } from "~/utils/db"; // <= 🛠️ Descomenta

export const action: ActionFunction = async ({ request }) => {
  // const formData = await request.formData(); // <= 🛠️ Descomenta
  // const intent = formData.get("intent");
  // if (intent === "new-post") {
  //   const post = await db.post.create({
  //     data: {
  //       userId: "648ce85a2e43deef9f5b7a87", //@TODO from cookie
  //       slug: slugify("nuevo-post-" + Date.now()),
  //     },
  //   });
  //   throw redirect(`/dash/${post.id}/edit`);
  // }
  return null;
};

// type LoaderData = { posts: Post[] }; // <= 🛠️ Descomenta
export const loader: LoaderFunction = async ({ request }) => {
  // const user=
  // const posts = await db.post.findMany(); // 🛠️ Descomenta
  // return { posts };
  return null; // <= 🛠️ Borra
};

export default function Dash() {
  // const { posts } = useLoaderData<LoaderData>();  // <= 🛠️ Descomenta
  const navigation = useNavigation();
  return (
    <article className="dark:bg-slate-800 min-h-screen dark:text-gray-200 py-20">
      <nav className="flex justify-between items-center max-w-3xl mx-auto">
        <div>
          <h2 className="block text-3xl font-bold mt-4 px-4 text-left">
            Todos tus posts
          </h2>
          <p className="px-4 text-md font-thin">Administra tu blog</p>
        </div>
        <Form method="post">
          <button
            disabled={navigation.state !== "idle"}
            type="submit"
            name="intent"
            value="new-post"
            className="text-white mr-4 bg-indigo-500 py-2 px-8 rounded-md hover:bg-indigo-600 disabled:bg-gray-500"
          >
            {navigation.state !== "idle" ? "Cargando..." : "Crear nuevo +"}
          </button>
        </Form>
      </nav>
      {/* 🛠️ Descomenta ⤵️ */}
      {/* <section className="max-w-3xl mx-auto flex flex-wrap gap-2 py-20 ">
        {posts.map((p) => (
          <PostCard id={p.id} title={p.title} key={p.id} />
        ))}
      </section> */}
    </article>
  );
}
