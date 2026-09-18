import type { Product } from "@/schemas/productSchema";
import StarRating from "../rating/StarRating";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ProductImages from "./ProductImages";
import ProductTags from "./ProductTags";
import ProductBuyPanel from "./purchase/ProductBuyPanel";
import RelatedProducts from "./RelatedProducts";

type Props = {
  item: Product;
};

export default function ProductDetail({ item }: Props) {
  return (
    <>
      <Card className="flex justify-center">
        <CardHeader className="justify-between">
          <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-5 gap-1">
          <ProductImages images={item.images} />
          <Card className="col-span-2 w-full max-w-sm p-2">
            <CardHeader className="gap-2">
              <StarRating rating={item.rating} />
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <ProductTags tags={item.tags} />
            <ProductBuyPanel item={item} />
          </Card>
        </div>
      </Card>
      <Card>
        <CardTitle>Related products</CardTitle>
        <RelatedProducts category={item.category} />
      </Card>
    </>
  );
}
