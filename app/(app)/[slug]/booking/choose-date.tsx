"use client";
import { CalendarXIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";
import {
  convertMinutesToHourMinutes,
  generateDateRange,
  generateWeekRange,
} from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { format, isBefore, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "./context";

export function ChooseDate() {
  const date = useBookingStore((s) => s.date);
  const beginAt = useBookingStore((s) => s.beginAt);
  const selectDate = useBookingStore((s) => s.selectDate);
  const selectBeginAt = useBookingStore((s) => s.selectBeginAt);
  const nextStep = useBookingStore((s) => s.nextStep);
  const [currentDate, setCurrentDate] = useState(date ?? new Date());
  const ranges = generateDateRange(generateWeekRange(currentDate));
  const slots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  const nextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    handleSelectDate(nextWeekDate);
  };

  const prevWeek = () => {
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);

    if (isBefore(prevWeekDate, new Date())) {
      handleSelectDate(new Date());
      return;
    }
    handleSelectDate(prevWeekDate);
  };

  const handleSelectDate = (date: Date) => {
    setCurrentDate(date);
    selectDate(date);
    selectBeginAt(null);
  };

  const handleSelectBeginAt = (beginAt: number) => {
    selectBeginAt(beginAt);
    nextStep();
  };

  const disabledPrevDate = isBefore(ranges[0], new Date());

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex flex-col p-4 gap-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <ChevronLeftIcon
            onClick={prevWeek}
            className={cn("w-5 h-5 text-muted-foreground cursor-pointer", {
              "!cursor-not-allowed pointer-events-none opacity-30":
                disabledPrevDate,
            })}
          />
          <h4 className="text-sm font-semibold">
            {format(currentDate, "MMMM yyyy")}
          </h4>
          <ChevronRightIcon
            onClick={nextWeek}
            className="w-5 h-5 text-muted-foreground cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          {ranges.map((rangeDate, index) => {
            const selected = isSameDay(rangeDate, date);
            const isLessThanToday =
              isBefore(rangeDate, new Date()) &&
              !isSameDay(rangeDate, new Date());

            return (
              <div
                onClick={() => handleSelectDate(rangeDate)}
                key={rangeDate.toString()}
                className={cn(
                  "flex items-center justify-center flex-col gap-1",
                  {
                    "cursor-not-allowed pointer-events-none opacity-30":
                      isLessThanToday,
                  }
                )}
              >
                <p className="uppercase font-semibold text-muted-foreground text-[10px]">
                  {format(rangeDate, "eee")}
                </p>
                <Button
                  className="md:w-12 md:h-12 md:rounded-full"
                  variant={selected ? "default" : "ghost"}
                  size={"icon"}
                >
                  <span className="text-sm">{format(rangeDate, "dd")}</span>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4 flex justify-center items-center bg-primary/10">
        <span className="text-xs">
          Selected Date:{" "}
          <span className="font-semibold">
            {format(date, "EEEE, MMMM dd, yyyy")}
          </span>
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
            const selected = slot * 60 === beginAt;
            return (
              <div
                key={slot}
                className={cn(
                  "flex items-center justify-between gap-8 px-4 hover:bg-primary/10 py-4 cursor-pointer",
                  {
                    "bg-primary/10": selected,
                  }
                )}
                onClick={() => handleSelectBeginAt(slot * 60)}
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
