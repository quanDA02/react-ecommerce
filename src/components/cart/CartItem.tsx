import type { Product } from "@/schemas/productSchema";
import { CardAction, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useCartStore } from "@/data/cart";
import { Trash } from "lucide-react";
import PurchaseQuantity from "../product/purchase/PurchaseQuantity";

type Props = {
  item: Product;
  quantity: number;
};

export default function CartItem({ item, quantity }: Props) {
  const removeItem = useCartStore((state) => state.removeItem);
  const increase = useCartStore((state) => state.addItem);
  const decrease = useCartStore((state) => state.decreaseItem);
  function removeHandler() {
    removeItem(item.id);
  }

  function increaseHandler() {
    increase(item, 1);
  }
  function decreaseHandler() {
    decrease(item, 1);
  }
  return (
    <div className="grid grid-cols-3 items-center border border-primary/50">
      <img
        src={item.thumbnail}
        className="col-span-1 bg-gray-200"
        alt={item.title}
      />
      <CardContent className="font-bold col-span-1">
        {item.title}
        <CardAction className="justify-center font-semibold w-full">
          <PurchaseQuantity
            asc={increaseHandler}
            desc={decreaseHandler}
            quantity={quantity}
          />
        </CardAction>
      </CardContent>
      <CardContent className="col-span-1 grid-rows-3 justify-center items-center">
        <CardAction className="justify-center font-semibold w-full">
          Price / unit: ${item.price}
        </CardAction>
        <CardAction className="justify-center font-bold w-full">
          Total ${(item.price * quantity).toFixed(2)}
        </CardAction>
        <CardAction className="justify-center font-bold w-full">
          <Button onClick={removeHandler} variant="destructive">
            <Trash />
            Remove
          </Button>
        </CardAction>
      </CardContent>
    </div>
  );
}
