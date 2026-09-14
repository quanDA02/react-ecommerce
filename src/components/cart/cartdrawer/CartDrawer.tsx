import { useCartStore } from "@/data/cart";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../../ui/drawer";
import { Button } from "@base-ui/react";
import CartItem from "../CartItem";
import { Link } from "@tanstack/react-router";

type Props = {};

export default function CartDrawer({}: Props) {
  const cartItems = useCartStore((state) => state.items);
  return (
    <DrawerContent className="w-[40vh]">
      <DrawerHeader>
        <DrawerTitle className="text-2xl">Cart items</DrawerTitle>
        {cartItems.map((item) => (
          <CartItem
            key={item.product.id}
            item={item.product}
            quantity={item.quantity}
          />
        ))}
      </DrawerHeader>
      <div className="p-4">{/* Content here */}</div>
      <DrawerFooter>
        <DrawerClose
          render={
            <Button className="w-full bg-primary h-10 p-0">
              <Link
                to="/cart"
                className="flex h-10 w-full items-center justify-center p-2"
              >
                Checkout
              </Link>
            </Button>
          }
        />
      </DrawerFooter>
    </DrawerContent>
  );
}
