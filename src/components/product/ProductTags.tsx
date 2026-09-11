import { Badge } from "../ui/badge";
import { CardAction } from "../ui/card";

type Props = {
  tags: string[];
};

export default function ProductTags({ tags }: Props) {
  return (
    <CardAction>
      {tags.map((tag) => (
        <Badge className="m-0.5" key={tag}>
          {tag}
        </Badge>
      ))}
    </CardAction>
  );
}
