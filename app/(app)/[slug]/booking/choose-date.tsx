"use client";
import { CalendarXIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  convertMinutesToHourMinutes,
  generateDateRange,
  generateWeekRange,
} from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "./context";

export function ChooseDate() {
  const date = useBookingStore((s) => s.date);
  const ranges = generateDateRange(generateWeekRange(date));
  const slots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex flex-col p-4 gap-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <ChevronLeftIcon className="w-5 h-5 text-muted-foreground" />
          <h4 className="text-sm font-semibold">July 2024</h4>
          <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex items-center justify-between gap-2">
          {ranges.map((range, index) => (
            <div
              key={range.toString()}
              className={cn("flex items-center justify-center flex-col gap-1")}
            >
              <p className="uppercase font-semibold text-muted-foreground text-[10px]">
                {format(range, "eee")}
              </p>
              <Button
                className="md:w-12 md:h-12 md:rounded-full"
                variant={index === 1 ? "default" : "ghost"}
                size={"icon"}
              >
                <span className="text-sm">{format(range, "dd")}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex justify-center items-center bg-primary/20">
        <span className="text-xs">
          Selected Date:{" "}
          <span className="font-semibold">Tuesday, July 8, 2024</span>
        </span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto scrollbar-app">
        {slots.length === 0 && (
          <div className="flex justify-center items-center flex-col flex-1 gap-2">
            <p className="text-base font-semibold">No Available slots</p>
            <p className="text-sm">
              Merchant is busy today. Please try another date
            </p>
            <CalendarXIcon className="w-24 h-24 text-muted-foreground" />
          </div>
        )}
        {slots.length > 0 &&
          slots.map((slot) => {
            return (
              <div
                key={slot}
                className="flex items-center justify-between gap-8 px-4 hover:bg-primary/20 py-4 cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <p className="">
                    {convertMinutesToHourMinutes(slot * 60, true)}
                  </p>
                </div>
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
              </div>
            );
          })}
      </div>
    </div>
  );
}
