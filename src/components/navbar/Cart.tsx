import { ShoppingCart } from "lucide-react";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div className="absolute right-3">
      <div className="relative">
        <div className="absolute h-5 min-w-5  bg-red-500 rounded-full px-1 items-center justify-center bottom-3 left-3 text-white">
          1
        </div>
        <ShoppingCart />
      </div>
    </div>
  );
}
