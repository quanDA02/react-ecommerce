import { useCartStore } from "@/data/cart";
import { ShoppingCart } from "lucide-react";
import { Drawer, DrawerTrigger } from "../ui/drawer";
import CartDrawer from "../cart/cartdrawer/CartDrawer";
import { Button } from "@base-ui/react";

type Props = {};

export default function CartNavbar({}: Props) {
  const cartItems = useCartStore((state) => state.itemCount());

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button className="relative">
            <div className="absolute h-5 min-w-5  bg-red-500 rounded-full px-1 items-center justify-center bottom-4 left-4 text-white">
              {cartItems}
            </div>
            <ShoppingCart />
          </Button>
        }
      />
      <CartDrawer />
    </Drawer>
  );
}
