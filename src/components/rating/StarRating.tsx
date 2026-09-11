import { Star } from "lucide-react";

type Props = {
  rating: number;
};

export default function StarRating({ rating }: Props) {
  return (
    <div className="flex flex-row">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`${rating - index > 1 ? "fill-amber-300" : ""}`}
        />
      ))}
    </div>
  );
}
