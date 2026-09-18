import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

type Props = {
  title: string;
};

export default function NavButton({ title }: Props) {
  return (
    <Link to={`/${title.toLowerCase()}`}>
      <Button>{title}</Button>
    </Link>
  );
}
