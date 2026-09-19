import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function SkeletonItem({}: Props) {
  return (
    <Card className="group relative mx-auto w-full max-w-sm pt-0 hover:drop-shadow-2xl">
      <Skeleton className="inset-0 z-30 aspect-square bg-black/5" />
      <CardHeader className="p-0 h-7 w-full px-6">
        <Skeleton className="overflow-clip group-hover:underline w-full h-5" />
      </CardHeader>
      <CardDescription className="flex flex-row gap-0.5 py-0 justify-center">
        <Skeleton className="h-5 w-15" />
        <Skeleton className="h-5 w-15" />
      </CardDescription>
      <CardDescription className="p-0 m-0 mx-10">
        <Skeleton className="h-5" />
      </CardDescription>
      <CardFooter className="grid grid-cols-4 gap-2">
        <Skeleton className="w-full h-7 col-span-3" />
        <Skeleton className="w-full h-7 col-span-1" />
      </CardFooter>
    </Card>
  );
}
