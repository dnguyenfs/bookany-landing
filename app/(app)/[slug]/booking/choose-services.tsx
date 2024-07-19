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
import { PlusIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  categories: ICategory[];
  merchant: IMerchant;
  type: "preview" | "booking";
};

export function ChooseServices({ categories, merchant, type }: Props) {
  return (
    <Accordion
      defaultValue={categories[0].id}
      type="single"
      collapsible
      className="w-full"
    >
      {categories.map((category) => (
        <AccordionItem key={category.id} value={category.id}>
          <AccordionTrigger className="uppercase px-4 hover:no-underline aria-expanded:bg-primary/20">
            <div>
              {category.name} <Badge className="py-0.5">2</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 divide-y">
            {category.services.map((service, index) => (
              <div
                key={service.id}
                className="flex items-center justify-between gap-8 pt-4 px-4"
              >
                <div className="flex flex-col gap-1">
                  <h5 className="font-semibold">{service.name}</h5>
                  <p className="text-muted-foreground text-xs">
                    {service.duration} mins
                  </p>
                  <p className="text-xs">from {merchant.currency}870</p>
                </div>
                {type === "preview" ? (
                  <Link href={`/${merchant.slug}/booking`}>
                    <Button size={"sm"}>Book</Button>
                  </Link>
                ) : (
                  <Button
                    size="icon"
                    className="w-6 h-6 rounded flex-none"
                    variant={"outline"}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
