import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";
import { CardAction } from "../ui/card";
import type { ProductSearch } from "@/schemas/searchSchema";

type Props = {
  tags: string[];
};

export default function ProductTags({ tags }: Props) {
  return (
    <CardAction>
      {tags.map((tag) => (
        <Link
          key={tag}
          to="/products"
          search={(prev: ProductSearch) => ({
            ...prev,
            category: tag,
            page: 1,
          })}
        >
          <Badge className="m-0.5">{tag}</Badge>
        </Link>
      ))}
    </CardAction>
  );
}
