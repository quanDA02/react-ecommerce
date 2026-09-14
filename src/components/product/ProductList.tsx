import { getProducts } from "@/data/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Product from "./Product";
import Filter from "./filter/filter";

type Props = {};

export default function ProductList({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  useEffect(() => {
    console.log(data[0]);
  }, [data]);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <Filter />
      </div>
      <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 2xl:md:grid-cols-4 gap-2 p-2">
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
