"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IService } from "@/types/service";
import { Check, CheckCircle, CheckIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import {
  isSelectedServiceSelector,
  serviceCountByCategoryIdSelector,
  useBookingStore,
} from "./context";
import { ICategory } from "@/types/category";
import { cn } from "@/lib/utils";

export function ChooseServices() {
  const categories = useBookingStore((s) => s.categories);

  return (
    <Accordion
      defaultValue={categories[0].id}
      type="single"
      collapsible
      className="w-full"
    >
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </Accordion>
  );
}

function Category({ category }: { category: ICategory }) {
  const count = useBookingStore(serviceCountByCategoryIdSelector(category.id));

  return (
    <AccordionItem key={category.id} value={category.id}>
      <AccordionTrigger className="px-4 hover:no-underline aria-expanded:bg-primary/10 gap-5">
        <div className="text-start">
          <p className="text-sm uppercase">
            {category.name}{" "}
            {count > 0 && <Badge className="py-0.5">{count}</Badge>}
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
          <Service category={category} key={service.id} service={service} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

function Service({
  service,
  category,
}: {
  service: IService;
  category: ICategory;
}) {
  const merchant = useBookingStore((s) => s.merchant);
  const selectService = useBookingStore((s) => s.selectService);
  const enableOnlineBooking = merchant.settings.enableOnlineBooking;
  const isSelected = useBookingStore(isSelectedServiceSelector(service.id));

  return (
    <div
      key={service.id}
      className={cn("flex items-center justify-between gap-8 pt-4 px-4", {
        "pointer-events-none": !enableOnlineBooking,
      })}
      onClick={() => selectService(category.id, service.id)}
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
          from {merchant.currency}
          {service.price}
        </p>
      </div>

      {enableOnlineBooking && (
        <Button
          size="icon"
          className="w-6 h-6 rounded flex-none"
          variant={isSelected ? "ghost" : "outline"}
        >
          {isSelected ? (
            <CheckIcon className="w-6 h-6 text-primary" />
          ) : (
            <PlusIcon className="w-5 h-5 text-muted-foreground" />
          )}
        </Button>
      )}
    </div>
  );
}
