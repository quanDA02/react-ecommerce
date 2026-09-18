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
  const search = useSearchStore((state) => state.query);
  const setSearch = useSearchStore((state) => state.setSearch);
  const setCategory = useSearchStore((state) => state.setCategory);
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
  const categoryHandler = () => {
    setCategory("");
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
      <Field className="p-2" orientation="horizontal">
        <p>Tag: </p>
        {search.category !== "" && (
          <Button
            onClick={categoryHandler}
            className="hover:bg-red-500 hover:text-white"
          >
            {search.category}
          </Button>
        )}
      </Field>
    </Card>
  );
}
