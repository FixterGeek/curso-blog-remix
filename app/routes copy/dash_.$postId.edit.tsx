import {
  type LoaderFunction,
  type LinksFunction,
  type ActionFunction,
  json,
} from "@remix-run/node";
import editorStyles from "@uiw/react-markdown-editor/markdown-editor.css";
import MarkdownEditor from "~/components/MarkDownEditor.client";
import { useFetcher, useLoaderData } from "@remix-run/react";
import slugify from "slugify";
import { updatePostSchema } from "~/utils/zod";
import { db } from "~/utils/db";
import toast, { Toaster } from "react-hot-toast";
import { createRef, useEffect } from "react";
import { signal } from "@preact/signals-react";
import invariant from "tiny-invariant";
import Switch from "~/components/Switch";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: editorStyles,
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
    select: {
      title: true,
      id: true,
      body: true,
      tags: true,
      published: true,
      cover: true,
    },
  });
  if (!post) {
    return json({ ok: false, error: "not found" }, { status: 404 });
  }
  // const post = { title: "", id: "1", body: "", tags: "", published: true };
  return { ...post };
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const form = Object.fromEntries(formData) as Record<string, string>;

  form.slug = slugify(form.title + "-" + Date.now());
  const validated = updatePostSchema.safeParse(form);
  if (!validated.success) {
    return json({ ok: false, error: validated.error }, { status: 400 });
  }

  await db.post.update({
    where: {
      id: params.postId,
    },
    data: validated.data,
  });
  return { ok: true };
};

export default function PostEdit() {
  const { title, body, cover, tags, published } = useLoaderData();
  const fetcher = useFetcher();
  const formRef = createRef<HTMLFormElement>();
  const timeout = signal<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (fetcher.data?.ok) {
      toast.success("Se ha guardado tu post", {
        id: "exito",
      });
    } else if (fetcher.data && !fetcher.data.ok) {
      toast.error("No se ha podido guardar", {
        id: "error",
      });
      console.error(fetcher.data?.error);
    }
  }, [fetcher]);

  const handleAutoSave = (content: string) => {
    if (timeout.value) {
      clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
      invariant(formRef.current !== null); // making TS happy
      const formData = new FormData(formRef.current);
      formData.append("body", content);
      fetcher.submit(formData, { method: "post" });
    }, 500);
  };

  return (
    <article className="dark:bg-slate-800 min-h-screen dark:text-slate-200">
      <main className="max-w-3xl mx-auto py-20">
        <fetcher.Form method="post" ref={formRef}>
          <div className="">
            <label className="text-xs mb-2">Editando tu post:</label>
            <input
              className="py-2 px-4 rounded-md w-full text-slate-500"
              type="text"
              placeholder="Escribe un título"
              defaultValue={title}
              name="title"
            />
          </div>
          <section className="flex gap-4 items-end">
            <div className="">
              <label className="text-xs">Agrega una imagen de portada:</label>
              <input
                className="py-2 px-4 rounded-md w-full text-slate-500"
                type="text"
                placeholder="Pega el link de una imagen"
                defaultValue={cover}
                name="cover"
              />
            </div>
            <div className="">
              <label className="text-xs ">Agrega un tag:</label>
              <input
                className="py-2 px-4 rounded-md w-full text-slate-500"
                type="text"
                placeholder="Escribe tags separadas con coma (,)"
                defaultValue={tags}
                name="tags"
              />
            </div>
            <div>
              <label htmlFor="">Público</label>
              <Switch name="published" defaultValue={published} />
            </div>
            <button
              disabled={fetcher.state !== "idle"}
              className="disabled:bg-gray-600 px-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 py-2"
            >
              Guardar
            </button>
          </section>
        </fetcher.Form>
        <div className="flex text-red-500">
          {fetcher.data?.error && (
            <ul>
              {fetcher.data.error.issues.map((err) => (
                <li key={err.path}>
                  {err.path} {err.message}
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr className="border-none bg-indigo-500 h-[1px] my-2" />
        <MarkdownEditor onChange={handleAutoSave} defaultValue={body} />
      </main>
      <Toaster />
    </article>
  );
}
