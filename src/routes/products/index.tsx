import Paging from "@/components/pagination/Paging";
import ProductFilter from "@/components/product/filter/ProductFilter";
import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/data/api";
import { useSearchStore } from "@/data/search";
import { urlSchema, type urlSearch } from "@/schemas/searchSchema";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/products/")({
  validateSearch: urlSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const { category, limit, page }: urlSearch = Route.useSearch();
  const setCategory = useSearchStore((state) => state.setCategory);
  const query = useSearchStore((state) => state.query);

  const { data, isLoading } = useQuery({
    queryKey: ["products", query],
    queryFn: () => getProducts(query),
  });
  useEffect(() => {
    setCategory(category);
  }, [category]);
  const pageHandler = (newPage: number) => {
    navigate({ search: (prev: urlSearch) => ({ ...prev, page: newPage }) });
  };

  return (
    <div className="grid grid-cols-1 p-2">
      <ProductFilter className="col-span-1" />
      {data && (
        <div>
          Showing {page * limit > data.total ? data.total : page * limit} of{" "}
          {data?.total}
        </div>
      )}
      <ProductList
        data={
          data?.products.slice(
            (page - 1) * limit,
            (page - 1) * limit + limit,
          ) ?? []
        }
        isLoading={isLoading}
        className="grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 col-span-1"
      />
      <Paging
        currentPage={page}
        pageHandler={pageHandler}
        totalPage={Math.ceil((data?.total ?? 1) / 20)}
      />
    </div>
  );
}
