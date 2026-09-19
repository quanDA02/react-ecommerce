import { useQuery } from "@tanstack/react-query";
import Featured from "./Featured";
import { getFeatureProduct } from "@/data/api";
import Banner from "./Banner";

type Props = {};

export default function Home({}: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["feature"],
    queryFn: () => getFeatureProduct(),
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <Featured isLoading={isLoading} data={data ?? []} />
    </div>
  );
}
