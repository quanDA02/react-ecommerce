import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

type Props = {
  images: string[];
};

export default function ProductImages({ images }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function handleClick(index: number) {
    api?.scrollTo(index);
  }
  return (
    <div className="col-span-3">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <img
                alt="dddepth-248"
                className="size-full rounded-xl object-cover bg-gray-50"
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="w-full">
        <div className="mask-x-from-90%">
          <CarouselContent className="my-1 flex">
            {images.map((image, index) => (
              <CarouselItem
                className={`basis-1/4 cursor-pointer transition-opacity ${current === index + 1 ? "opacity-100" : "opacity-50"}`}
                onClick={() => handleClick(index)}
                key={image}
              >
                <img
                  alt="dddepth-248"
                  className="size-full rounded-xl object-cover bg-gray-50"
                  src={image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
