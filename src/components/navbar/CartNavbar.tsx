import { useCartStore } from "@/data/cart";
import { ShoppingCart } from "lucide-react";
import { Drawer, DrawerTrigger } from "../ui/drawer";
import CartDrawer from "../cart/cartdrawer/CartDrawer";
import { Button } from "@base-ui/react";

type Props = {};

export default function CartNavbar({}: Props) {
  const cartItems = useCartStore((state) => state.itemCount());

  return (
    <div className="absolute right-3">
      <Drawer swipeDirection="right">
        <DrawerTrigger
          render={
            <Button>
              <div className="absolute h-5 min-w-5  bg-red-500 rounded-full px-1 items-center justify-center bottom-3 left-3 text-white">
                {cartItems}
              </div>
              <ShoppingCart />
            </Button>
          }
        />
        <CartDrawer />
      </Drawer>
    </div>
  );
}
