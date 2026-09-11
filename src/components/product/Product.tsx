import type { Product } from "@/schemas/productSchema";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Props = {
  item: Product;
};

export default function Product({ item }: Props) {
  return (
    <Card className="group relative mx-auto w-full max-w-sm pt-0 hover:drop-shadow-2xl">
      <div className="absolute inset-0 z-30 aspect-square bg-black/5" />
      <img
        src={item.thumbnail}
        alt={item.title}
        className="relative z-20 aspect-sqare w-full object-cover transition-transform duration-300  group-hover:scale-120"
      />
      <CardHeader className="p-0 h-7 w-full">
        <CardTitle className="overflow-clip group-hover:underline">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardDescription className="flex flex-row gap-0.5 py-0 justify-center">
        <CardAction>
          {item.tags.map((tag) => (
            <Badge className="m-0.5" key={tag}>
              {tag}
            </Badge>
          ))}
        </CardAction>
      </CardDescription>
      <CardDescription className="p-0 m-0">${item.price}</CardDescription>
      <CardFooter className="grid grid-cols-4">
        <Button className="w-full col-span-3">Detail</Button>
        <Button className="w-full col-span-1">
          <ShoppingCart />
        </Button>
      </CardFooter>
    </Card>
  );
}
