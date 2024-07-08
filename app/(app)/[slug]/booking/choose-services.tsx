"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export function ChooseServices() {
  return (
    <Accordion
      defaultValue="item-1"
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="uppercase px-4 hover:no-underline aria-expanded:bg-primary/20">
          Color
        </AccordionTrigger>
        <AccordionContent className="space-y-4 divide-y">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-8 pt-4 px-4"
            >
              <div className="flex flex-col gap-1">
                <h5 className="font-semibold">
                  Signature Hot Oil Nourishing Massage Treatment
                </h5>
                <p className="text-muted-foreground text-xs">
                  1hr, 15mins - 1hr, 40mins
                </p>
                <p className="text-xs">from CA$870</p>
              </div>
              <Button
                size="icon"
                className="w-6 h-6 rounded flex-none"
                variant={"outline"}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="uppercase px-4 hover:no-underline aria-expanded:bg-primary/20">
          Is it styled?
        </AccordionTrigger>
        <AccordionContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-8 pt-4 px-4"
            >
              <div className="flex flex-col gap-1">
                <h5 className="font-semibold">
                  Signature Hot Oil Nourishing Massage Treatment
                </h5>
                <p className="text-muted-foreground text-xs">
                  1hr, 15mins - 1hr, 40mins
                </p>
                <p className="text-xs">from CA$870</p>
              </div>
              <Button
                size="icon"
                className="w-6 h-6 rounded flex-none"
                variant={"outline"}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="uppercase px-4 hover:no-underline aria-expanded:bg-primary/20">
          Is it animated?
        </AccordionTrigger>
        <AccordionContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-8 pt-4 px-4"
            >
              <div className="flex flex-col gap-1">
                <h5 className="font-semibold">
                  Signature Hot Oil Nourishing Massage Treatment
                </h5>
                <p className="text-muted-foreground text-xs">
                  1hr, 15mins - 1hr, 40mins
                </p>
                <p className="text-xs">from CA$870</p>
              </div>
              <Button
                size="icon"
                className="w-6 h-6 rounded flex-none"
                variant={"outline"}
              >
                <PlusIcon className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
