import { productSchema, type Product } from "@/schemas/productSchema";
import { responseSchema } from "@/schemas/responseSchema";
import type { ProductSearch } from "@/schemas/searchSchema";

export async function getProducts(searchParams: ProductSearch) {
  const { search, category, sort } = searchParams;
  const res = await fetch(
    `https://dummyjson.com/products/search?limit=0&q=${search}&sortBy=title&order=${sort}`,
  );
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

export async function getRelatedProduct(category: string) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  const data = await res.json();
  const response = responseSchema.parse(data);
  const products = response.products;
  return products;
}
