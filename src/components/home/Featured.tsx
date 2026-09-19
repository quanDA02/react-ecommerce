import { Link } from "@tanstack/react-router";
import ProductList from "../product/ProductList";
import { Card, CardAction, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/schemas/productSchema";

type Props = {
  data: Product[];
  isLoading: boolean;
};

export default function Featured({ data, isLoading }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Featured products</CardTitle>
        <CardAction>
          <Link to="/products">
            <Button variant="link">
              Browse all <ArrowRight />
            </Button>
          </Link>
        </CardAction>
      </CardHeader>
      <ProductList
        className="grid grid-cols-2 md:grid-cols-4"
        data={data ?? []}
        isLoading={isLoading}
      />
    </Card>
  );
}
