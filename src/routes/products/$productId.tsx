import ProductDetail from "@/components/product/ProductDetail";
import { getProductDetails } from "@/data/api";
import type { Product } from "@/schemas/productSchema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
  loader: ({ params }) => getProductDetails(params.productId),
});

function RouteComponent() {
  const product: Product = Route.useLoaderData();
  return <ProductDetail item={product} />;
}
