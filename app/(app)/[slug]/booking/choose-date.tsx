"use client";
import {
  CalendarXIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LoaderCircleIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import {
  convertMinutesToHourMinutes,
  generateDateRange,
  generateWeekRange,
} from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { format, isBefore, isSameDay, set } from "date-fns";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "./context";
import { getTimeSlotsAction } from "./actions";
import { IGetTimeSlotProps, ITimeSlotRes } from "@/api/time-slots";
import { IError } from "@/types/error";
import { toast } from "sonner";

export function ChooseDate() {
  const date = useBookingStore((s) => s.date);
  const beginAt = useBookingStore((s) => s.beginAt);
  const selectDate = useBookingStore((s) => s.selectDate);
  const staffId = useBookingStore((s) => s.staffId);
  const services = useBookingStore((s) => s.services);
  const selectBeginAt = useBookingStore((s) => s.selectBeginAt);
  const nextStep = useBookingStore((s) => s.nextStep);
  const merchantSlug = useBookingStore((s) => s.merchant.slug);
  const [currentDate, setCurrentDate] = useState(date ?? new Date());
  const ranges = generateDateRange(generateWeekRange(currentDate));
  const [res, setRes] = useState<ITimeSlotRes>({});
  const [isFetching, setIsFetching] = useState(false);

  const timeSlot = useMemo(() => {
    const date = format(currentDate, "yyyy-MM-dd");
    return res[date] ?? { slots: [], isClosed: false, closedReason: "" };
  }, [currentDate, res]);

  const slots = useMemo(() => {
    return timeSlot.slots ?? [];
  }, [timeSlot.slots]);

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

  const dateRangeString = useMemo(() => {
    return `${format(ranges[0], "yyyy-MM-dd")}_${format(
      ranges[ranges.length - 1],
      "yyyy-MM-dd"
    )}`;
  }, [ranges]);

  const serviceIds = useMemo(() => {
    return services.map((service) => service.id);
  }, [services]);

  useEffect(() => {
    const fetchTimeSlots = async () => {
      setIsFetching(true);
      let body = {
        slug: merchantSlug,
        userAgent: navigator.userAgent,
        serviceIds,
        startDate: dateRangeString.split("_")[0],
        endDate: dateRangeString.split("_")[1],
      } as IGetTimeSlotProps;
      if (staffId !== "_system") {
        body = {
          ...body,
          staffId,
        };
      }
      const [res, error] = await getTimeSlotsAction(body);
      if (error) {
        toast.info(error.message);
        setIsFetching(false);
        return;
      }
      if (res) {
        setRes(res);
      }
      setIsFetching(false);
    };

    fetchTimeSlots();
  }, [dateRangeString, merchantSlug, staffId, serviceIds]);

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

            const formatedDate = format(rangeDate, "yyyy-MM-dd");

            const timeSlots = res[formatedDate] ?? {
              slots: [],
              isClosed: false,
            };

            const isClosed = timeSlots?.isClosed;
            const slots = timeSlots?.slots;

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
                      isLessThanToday || isClosed,
                    "opacity-30": slots.length === 0,
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
      <div
        className={cn(
          "flex flex-col flex-1 overflow-y-auto scrollbar-app relative",
          {
            "opacity-30": isFetching,
          }
        )}
      >
        {slots.length === 0 && !timeSlot.isClosed && !isFetching && (
          <div className="flex justify-center items-center flex-col flex-1 gap-2">
            <p className="text-base font-semibold">No Available slots</p>
            <p className="text-sm">
              Merchant is busy today. Please try another date
            </p>
            <CalendarXIcon className="w-24 h-24 text-muted-foreground" />
          </div>
        )}
        {timeSlot.isClosed && !isFetching && (
          <div className="flex justify-center items-center flex-col flex-1 gap-2">
            <p className="text-base font-semibold">Merchant is closed</p>
            <blockquote className="text-sm text-muted-foreground">
              "{timeSlot.closedReason}"
            </blockquote>
            <p className="text-sm text-muted-foreground">
              Please try another date
            </p>
            <CalendarXIcon className="w-24 h-24 text-muted-foreground" />
          </div>
        )}
        {isFetching && (
          <div className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full">
            <LoaderCircleIcon className="w-8 h-8 animate-spin text-gray-500" />
          </div>
        )}
        {slots.length > 0 &&
          slots.map((slot) => {
            const selected = slot.beginAt === beginAt;
            return (
              <div
                key={slot.beginAt}
                className={cn(
                  "flex items-center justify-between gap-8 px-4 hover:bg-primary/10 py-4 cursor-pointer",
                  {
                    "bg-primary/10": selected,
                  }
                )}
                onClick={() => handleSelectBeginAt(slot.beginAt)}
              >
                <div className="flex flex-col gap-1">
                  <p className="">
                    {convertMinutesToHourMinutes(slot.beginAt, true)}
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
