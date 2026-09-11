import { productSchema, type Product } from "@/schemas/productSchema";
import { responseSchema } from "@/schemas/responseSchema";

export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const response = responseSchema.parse(data);
  const products = response.products;
  return products;
}

export async function getProductDetails(productId: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await res.json();
  return productSchema.parse(data);
}
