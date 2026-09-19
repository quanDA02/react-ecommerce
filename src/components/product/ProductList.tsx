import ProductItem from "./ProductItem";
import type { Product } from "@/schemas/productSchema";
import SkeletonItem from "./skeleton/SkeletonItem";

type Props = {
  className?: string;
  data: Product[];
  isLoading: boolean;
};

export default function ProductList({ className, data, isLoading }: Props) {
  return (
    <div className={`grid ${className} gap-2 p-2`}>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))
        : data.map((item) => <ProductItem key={item.id} item={item} />)}
    </div>
  );
}
