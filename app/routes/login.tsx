import { type ActionFunction, redirect } from "@remix-run/node";
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
    console.log("Not valid?", validated);
    return null;
  }

  //
  await getOrCreateUser(data.credential);
  // set cookie @TODO
  return redirect("/dash");
};

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen border-red-500">
      <div
        id="g_id_onload"
        data-client_id="325591888601-04tqp5q9kifu77j699pqi8o6pqjd74jb.apps.googleusercontent.com"
        data-login_uri="https://623c-187-189-88-81.ngrok-free.app/login"
        data-cancel_on_tap_outside="false"
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: ` <script src="https://accounts.google.com/gsi/client" async defer></script>`,
        }}
      ></div>
      <h2 className="text-6xl font-bold uppercase">Inciando sesión asegun</h2>
    </div>
  );
}
