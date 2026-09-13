import { useCartStore } from "@/data/cart";
import { Card, CardTitle } from "../ui/card";

type Props = {};

export default function CheckoutPanel({}: Props) {
  const total = useCartStore((state) => state.totalPrice());
  return (
    <Card>
      <CardTitle className="text-2xl font-semibold">Checkout</CardTitle>
      <CardTitle className="text-2xl font-semibold">
        Total: ${total.toFixed(2)}
      </CardTitle>
    </Card>
  );
}
