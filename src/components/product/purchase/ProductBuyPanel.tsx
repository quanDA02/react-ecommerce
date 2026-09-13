import type { Product } from "@/schemas/productSchema";

import ProductStat from "./ProductStat";

import { useEffect, useState } from "react";
import PurchaseQuantity from "./PurchaseQuantity";
import ProductPrice from "./ProductPrice";
import { CardFooter } from "@/components/ui/card";
import PurchaseButton from "./PurchaseButton";
import { toast } from "@/components/ui/toast";
import { useCartStore } from "@/data/cart";

type Props = {
  item: Product;
};

export default function ProductBuyPanel({ item }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);
  function Increase() {
    setQuantity(quantity + 1);
  }
  function Decrease() {
    setQuantity(quantity - 1);
  }
  function purchase() {
    console.log("p");
  }
  function addToCart() {
    toast.add({
      title: "Added to cart",
      description: `Quantity: ${quantity}`,
    });
    addItem(item, quantity);
  }
  return (
    <>
      <div className="grid grid-cols-3 items-center">
        <ProductPrice
          className="col-span-1 text-2xl p-0"
          price={item.price}
          quantity={quantity}
        />
        <ProductStat
          className="col-span-2 p-0"
          stock={item.stock}
          brand={item.brand}
          price={item.price}
        />
      </div>
      <CardFooter className="flex flex-col gap-1">
        <PurchaseQuantity asc={Increase} desc={Decrease} quantity={quantity} />
        <PurchaseButton clickHandle={addToCart} buttonName="Add to cart" />
        <PurchaseButton clickHandle={purchase} buttonName="Purchase" />
      </CardFooter>
    </>
  );
}
