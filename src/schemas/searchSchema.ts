import { z } from "zod";
export const searchSchema = z.object({
  search: z.string().default(""),
  category: z.string().default(""),
  sort: z.enum(["asc", "desc"]).default("asc"),
});

export const tagSchema = z.object({
  category: z.string().default(""),
});
export type tagSearch = z.infer<typeof tagSchema>;
export type ProductSearch = z.infer<typeof searchSchema>;
