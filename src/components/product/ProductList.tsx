import ProductItem from "./ProductItem";
import type { Product } from "@/schemas/productSchema";

type Props = {
  className?: string;
  data: Product[];
};

export default function ProductList({ className, data }: Props) {
  return (
    <div className={`grid ${className} gap-2 p-2`}>
      {data.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}
