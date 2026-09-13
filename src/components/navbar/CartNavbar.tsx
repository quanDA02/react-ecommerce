import { useCartStore } from "@/data/cart";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

type Props = {};

export default function CartNavbar({}: Props) {
  const cartItems = useCartStore((state) => state.itemCount());

  return (
    <div className="absolute right-3">
      <Link to="/cart" className="relative">
        <div className="absolute h-5 min-w-5  bg-red-500 rounded-full px-1 items-center justify-center bottom-3 left-3 text-white">
          {cartItems}
        </div>
        <ShoppingCart />
      </Link>
    </div>
  );
}
