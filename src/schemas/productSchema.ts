import { z } from "zod";
import { reviewSchema } from "./reviewSchema";
import { metaSchema } from "./metaSchema";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number(),
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(reviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: metaSchema,
  images: z.array(z.string()),
  thumbnail: z.string(),
});

export type Product = z.infer<typeof productSchema>;
