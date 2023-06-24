import { type LoaderFunction } from "@remix-run/node";
// import { db } from "~/utils/db";

export const loader: LoaderFunction = async ({ params, request }) => {
  // const url = new URL(request.url);
  // const allPosts = await db.post.findMany({
  //   where: { published: true },
  //   include: { author: true },
  // });

  // const postItems = allPosts.map((post) => {
  //   return [
  //     `<url>`,
  //     `<loc>https://curso-blog-remix.netlify.app/blog/${post.slug}</loc>`,
  //     `<lastmod>${post.createdAt}</lastmod>`,
  //     `</url>`,
  //   ].join("");
  // });

  // const xml = [
  //   `<?xml version="1.0" encoding="UTF-8"?>`,
  //   `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  //   // Agregamos nuestras tres feeds a la lista de rutas (y cualquier otra ruta que quieras indexar)
  //   `<url>`,
  //   `<loc>https://curso-blog-remix.netlify.app/feed.xml</loc>`,
  //   `<lastmod>${new Date()}</lastmod>`,
  //   `</url>`,

  //   `<url>`,
  //   `<loc>https://curso-blog-remix.netlify.app/feed.json</loc>`,
  //   `<lastmod>${new Date()}</lastmod>`,
  //   `</url>`,

  //   `<url>`,
  //   `<loc>https://curso-blog-remix.netlify.app/feed.atom</loc>`,
  //   `<lastmod>${new Date()}</lastmod>`,
  //   `</url>`,
  //   // index page, or /blog page
  //   `<url>`,
  //   `<loc>${url.origin}/blog</loc>`,
  //   `<lastmod>${new Date()}</lastmod>`,
  //   `</url>`,
  //   ...postItems,
  //   `</urlset>`,
  // ];

  return new Response(
    // xml.join("") // <= 🛠️ Descomenta
    "<xml tags>", // <= 🛠️ Borra
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "x-content-type-options": "nosniff",
      },
    }
  );
};
