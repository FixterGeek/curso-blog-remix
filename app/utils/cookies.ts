import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const useCSRFToken = createCookie("g_csrf_token", {
  maxAge: 604_800, // one week
});
