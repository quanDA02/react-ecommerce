import ProductFilter from "@/components/product/filter/ProductFilter";
import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/data/api";
import { useSearchStore } from "@/data/search";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  // validateSearch: searchSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const query = useSearchStore((state) => state.query);
  const { data, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: () => getProducts(query),
  });
  return (
    <div className="grid grid-cols-1 p-2">
      <ProductFilter className="col-span-1" />
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ProductList
          data={data ?? []}
          className="grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 col-span-1"
        />
      )}
    </div>
  );
}
