import { z } from "zod";

export function booleanTransformer(value: string) {
  if (typeof value === "string" && value.toLowerCase() === "true") {
    return true;
  } else if (typeof value === "string" && value.toLowerCase() === "false") {
    return false;
  }
  if (typeof value === "string" && value === "") {
    return [];
  }
  return value;
}

export const oneTapDataSchema = z.object({
  credential: z.string(),
  g_csrf_token: z.string(),
});
export type OneTapType = z.infer<typeof oneTapDataSchema>;

export const readPostSchema = z.object({
  title: z.string().min(5),
  id: z.string(),
  cover: z.string(),
  slug: z.string(),
  createdAt: z.date(),
  author: z.any(),
});
export type ReadPostType = z.infer<typeof readPostSchema>;

export const updatePostSchema = z.object({
  cover: z.string().optional(),
  title: z.string().min(5),
  slug: z.string().min(5),
  body: z.string().optional(),
  published: z.preprocess(
    (val) =>
      String(val).toLowerCase() === "true" ||
      val === true ||
      String(val).toLowerCase() === "on"
        ? true
        : false,
    z.boolean()
  ),
  tags: z.string().optional(),
});
export type UpdatePostType = z.infer<typeof updatePostSchema>;
