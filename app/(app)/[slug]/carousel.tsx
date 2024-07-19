"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeartIcon, MoveLeftIcon } from "lucide-react";
import { IMerchant } from "@/types/merchant";
import { getImagePathUrl } from "@/lib/image";

type Props = {
  merchant: IMerchant;
};

export function MerchantImages({ merchant }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const coverUrl = merchant.coverUrl ?? "";

  const photos =
    merchant.fileFolders.find((f) => f.subName === "photos")?.files ?? [];
  const photoUrls = photos.map((f) => getImagePathUrl(f.key));

  const covers = [coverUrl, ...photoUrls].filter(Boolean);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-[200px]">
      <Carousel setApi={setApi} className="w-full relative">
        <div className="absolute top-4 left-0 w-full px-4 z-10">
          <div className="flex items-center justify-between">
            <Button size="icon" variant={"outline"}>
              <MoveLeftIcon className="w-5 h-5" />
            </Button>

            <Button size="icon" variant={"outline"}>
              <HeartIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <CarouselContent>
          {covers.map((imageUrl, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "max-w-full overflow-hidden p-0 relative h-[200px]",
                "md:h-[250px]"
              )}
            >
              <Image
                src={imageUrl}
                fill
                className="w-full h-full top-0 left-0 object-cover"
                alt="Astronaut in the air"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <Badge className="absolute bottom-2 right-2 bg-accent-foreground shadow">
          {current} / {count}
        </Badge>
      </Carousel>
    </div>
  );
}
