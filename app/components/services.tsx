"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";
import { IService } from "@/types/service";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  categories: ICategory[];
  merchant: IMerchant;
};

export function Services({ categories, merchant }: Props) {
  return (
    <Accordion
      defaultValue={categories[0].id}
      type="single"
      collapsible
      className="w-full"
    >
      {categories.map((category) => (
        <AccordionItem key={category.id} value={category.id}>
          <AccordionTrigger className="px-4 hover:no-underline aria-expanded:bg-primary/10 gap-5">
            <div className="text-start">
              <p className="text-sm uppercase">
                {category.name} <Badge className="py-0.5">2</Badge>
              </p>
              {category.description && (
                <p className="text-muted-foreground text-xs line-clamp-3">
                  {category.description ?? "Lorem ipsum dolor sit amet"}
                </p>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 divide-y">
            {category.services.map((service) => (
              <Service merchant={merchant} key={service.id} service={service} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Service({
  service,
  merchant,
}: {
  service: IService;
  merchant: IMerchant;
}) {
  const enableOnlineBooking = merchant.settings.enableOnlineBooking;

  return (
    <div
      key={service.id}
      className="flex items-center justify-between gap-8 pt-4 px-4"
    >
      <div className="flex flex-col gap-1">
        <h5 className="font-semibold">{service.name}</h5>

        {service.description && (
          <p className="text-muted-foreground text-xs line-clamp-3">
            {service.description ?? "Lorem ipsum dolor sit amet"}
          </p>
        )}

        <p className="text-xs">{service.duration} mins</p>
        <p className="text-xs text-muted-foreground">
          from {merchant.currency}870
        </p>
      </div>

      {enableOnlineBooking && (
        <Link href={`/${merchant.slug}/booking`}>
          <Button size={"sm"}>Book</Button>
        </Link>
      )}
    </div>
  );
}
