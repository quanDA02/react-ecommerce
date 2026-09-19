import { useCartStore } from "@/data/cart";
import { CardContent, CardTitle } from "../ui/card";
import CartItem from "./CartItem";
import CheckoutPanel from "./CheckoutPanel";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import Payment from "./Payment";

type Props = {};

export default function Cart({}: Props) {
  const cartItems = useCartStore((state) => state.items);
  const clear = useCartStore((state) => state.clearCart);
  function clearCart() {
    clear();
  }
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
          <div className="col-span-2 flex flex-col justify-between">
            <CardTitle className="text-2xl font-semibold">Cart Items</CardTitle>
            <CardContent>
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item.product}
                  quantity={item.quantity}
                />
              ))}
            </CardContent>
            <Button
              onClick={clearCart}
              className="w-full mt-2"
              variant="destructive"
            >
              <Trash /> Clear all
            </Button>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <CheckoutPanel />
            <Payment />
          </div>
        </div>
      ) : (
        <div className="p-10 text-4xl font-bold">Cart is empty</div>
      )}
    </div>
  );
}
