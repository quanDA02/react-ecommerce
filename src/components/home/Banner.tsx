import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card } from "../ui/card";
type Props = {};

export default function Banner({}: Props) {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="group/card relative aspect-video overflow-hidden border-0 p-0">
                <img
                  src={`https://picsum.photos/1000/800?&random=${index + 10}`}
                  alt={`Slide ${index + 1}`}
                  width={1000}
                  height={800}
                  className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">New arival</h3>
                  <p className="text-sm text-white/90">
                    BeautiLorem ipsum dolor sit amet.
                  </p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
