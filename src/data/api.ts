import { responseSchema } from "@/schemas/responseSchema";

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const response = responseSchema.parse(data);
  const products = response.products;
  return products;
}
