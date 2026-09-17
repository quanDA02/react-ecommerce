import { z } from "zod";
export const searchSchema = z.object({
  search: z.string().default(""),
  category: z.string().default(""),
  sort: z.enum(["asc", "desc"]).default("asc"),
});

export const urlSchema = z.object({
  category: z.string().default(""),
  page: z.number().default(1),
  limit: z.number().default(20),
});
export type urlSearch = z.infer<typeof urlSchema>;
export type ProductSearch = z.infer<typeof searchSchema>;
