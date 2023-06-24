import type { V2_MetaFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// Meta function opcional
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Construye un blog con Remix" },
    { name: "description", content: "Hola blissmo" },
  ];
};

// El loader consigue las variables de entorno desde el servidor.
export const loader = async () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  };
};

export default function Index() {
  // const { NODE_ENV, GOOGLE_CLIENT_ID } = useLoaderData();
  return (
    <div className="flex min-h-screen main">
      <h2 className="self-center mx-auto text-2xl px-4">
        🛠️ Bórrame y sustitúyeme por un login bonito 👽
      </h2>
      {/* <div
        id="g_id_onload"
        data-client_id={GOOGLE_CLIENT_ID}
        data-login_uri={
          NODE_ENV === "development"
            ? "http://localhost:3000/login"
            : "https://curso-blog-remix.netlify.app/login"
        }
        data-cancel_on_tap_outside="false"
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: ` <script src="https://accounts.google.com/gsi/client" async defer></script>`,
        }}
      ></div>
      <p className="text-xs absolute bottom-[36%] text-gray-500 w-full left-0 text-center pr-8">
        Culaquier otro término y condición necesario de mencionar
      </p> */}
    </div>
  );
}
