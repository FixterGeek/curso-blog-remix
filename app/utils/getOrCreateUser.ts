import jwtDecode from "jwt-decode";
import { db } from "./db";

export default async function getOrCreateUser(credential: string) {
  const decoded = jwtDecode(credential) as Record<string, string>;

  const email = decoded.email;
  return await db.user.upsert({
    where: {
      email,
    },
    create: {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    },
    update: {
      name: decoded.name,
      picture: decoded.picture,
    },
  });
}
