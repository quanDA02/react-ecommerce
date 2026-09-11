import z from "zod";
import { productSchema } from "./productSchema";

export const responseSchema = z.object({
  products: z.array(productSchema),
});
