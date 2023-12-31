import {
  type ActionFunction,
  redirect,
  type LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/sessions";
import getOrCreateUser from "~/utils/getOrCreateUser";
import { oneTapDataSchema, type OneTapType } from "~/utils/zod";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);
  const data: OneTapType = {
    credential: String(body.credential),
    g_csrf_token: String(body.g_csrf_token),
  };

  const validated = oneTapDataSchema.safeParse(data);
  if (!validated.success) {
    return null;
  }

  //
  const user = await getOrCreateUser(data.credential);
  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", user.id);
  return redirect("/dash", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export const loader: LoaderFunction = async () => {
  return {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    REDIRECT_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/login"
        : "PRODUCTION_URL",
  };
};

export default function Login() {
  const { GOOGLE_CLIENT_ID, REDIRECT_URL } =
    useLoaderData<ReturnType<typeof loader>>();
  console.log("ORA? ", GOOGLE_CLIENT_ID, REDIRECT_URL);
  return (
    <div className="flex justify-center items-center py-20 border-red-500">
      <div
        id="g_id_onload"
        data-client_id={GOOGLE_CLIENT_ID}
        data-login_uri={REDIRECT_URL}
        data-cancel_on_tap_outside="false"
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: ` <script src="https://accounts.google.com/gsi/client" async defer></script>`,
        }}
      ></div>
      <h2 className="text-6xl font-bold uppercase">Inciando sesión</h2>
    </div>
  );
}
