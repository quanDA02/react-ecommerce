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
  response.products = filter(response.products, category ?? "");
  response.total = response.products.length;
  return response;
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

function filter(products: Product[], category: string) {
  if (category === "none" || category === "") {
    return products;
  }
  const filteredProducts = products.filter((product) => {
    return product.tags.includes(category);
  });
  return filteredProducts;
}
