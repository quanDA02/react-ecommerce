import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/data/search";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

type Props = {
  className?: string;
};

export default function ProductFilter({ className }: Props) {
  const setSearch = useSearchStore((state) => state.setSearch);
  const setSort = useSearchStore((state) => state.setSort);
  const [query, setQuery] = useState("");
  const [ascend, setAscend] = useState(true);

  const sortHandler = () => {
    setAscend((a) => !a);
    setSort(ascend ? "desc" : "asc");
  };
  const searchHandler = (search: string) => {
    setSearch(search);
  };
  return (
    <Card className={className}>
      <Field orientation="horizontal" className="p-2">
        <Input
          onKeyDown={(e) => {
            if (e.code === "Enter") searchHandler(query);
          }}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        ></Input>
        <Button onClick={() => searchHandler(query)}>Search</Button>
        <Button onClick={() => sortHandler()}>
          {ascend ? <ArrowUp /> : <ArrowDown />}
        </Button>
      </Field>
    </Card>
  );
}
