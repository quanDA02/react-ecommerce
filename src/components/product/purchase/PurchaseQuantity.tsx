import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type Props = {
  asc: () => void;
  desc: () => void;
  quantity: number;
};

export default function PurchaseQuantity({ asc, desc, quantity }: Props) {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-gray-100">
      <Button onClick={desc} className="col-span-1">
        <Minus />
      </Button>
      <div className="col-span-3">{quantity}</div>
      <Button onClick={asc} className="col-span-1">
        <Plus />
      </Button>
    </div>
  );
}
