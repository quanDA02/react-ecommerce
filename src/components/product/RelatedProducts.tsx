import { useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import { getRelatedProduct } from "@/data/api";

type Props = {
  category: string;
};

export default function RelatedProducts({ category }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["relatedProduct", category],
    queryFn: () => getRelatedProduct(category),
  });
  return (
    <ProductList
      isLoading={isLoading}
      data={data ?? []}
      className="grid-flow-col auto-cols-[calc(50%-4px)] md:auto-cols-[calc(33.333%-4px)] 2xl:auto-cols-[calc(25%-4px)] overflow-x-scroll"
    />
  );
}
