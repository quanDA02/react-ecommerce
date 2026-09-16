import z from "zod";
import { productSchema } from "./productSchema";

export const responseSchema = z.object({
  products: z.array(productSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
