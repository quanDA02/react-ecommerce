import { Card } from "@/components/ui/card";

type Props = {
  stock: number;
  brand?: string;
  price: number;
  className: string;
};

export default function ProductStat({ stock, brand, price, className }: Props) {
  return (
    <Card className={className}>
      <ul className="border-primary justify-items-start p-1 gap-1 ">
        <li>Price: ${price}</li>
        <li>Stock: {stock}</li>
        {brand && <li>Brand: {brand}</li>}
      </ul>
    </Card>
  );
}
