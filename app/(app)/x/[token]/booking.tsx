"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DefaultMerchantOnlineColorHex } from "@/const";
import { hexToHSL } from "@/lib/color";
import { convertMinutesToHourMinutes } from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { addPlus } from "@/lib/utils/phone";
import { IBooking } from "@/types/booking";
import { format, isBefore } from "date-fns";
import { formatNumber } from "libphonenumber-js";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Barcode from "react-barcode";

type Props = {
  booking: IBooking;
};

export default function DefaultBookingPage({ booking }: Props) {
  const [hasHydratedColor, setHasHydratedColor] = useState(false);
  const merchant = booking.merchant;

  const merchantHexColor =
    merchant?.settings?.hexColor ?? DefaultMerchantOnlineColorHex;

  useEffect(() => {
    const initAppColor = async () => {
      if (merchantHexColor) {
        document.documentElement.style.setProperty(
          "--primary",
          `${hexToHSL(merchantHexColor)}`
        );

        console.log("hexToHSL(merchantHexColor)", hexToHSL(merchantHexColor));
      }
      setHasHydratedColor(true);
    };
    initAppColor();
  }, [merchantHexColor]);

  if (!hasHydratedColor) {
    return (
      <div className="flex flex-col h-full w-full justify-center items-center text-primary">
        <LoaderCircleIcon className="w-8 h-8 animate-spin text-gray-500" />
      </div>
    );
  }

  const totalPrice = booking?.bookingServices.reduce((acc, bkSv) => {
    return (bkSv.price ?? 0) + acc;
  }, 0);

  const beginAt =
    booking?.bookingServices
      .map((bkSv) => bkSv.beginAt)
      .sort((a, b) => a - b)[0] ?? 0;

  const canCancel =
    (booking.state === "unconfirm" ||
      booking.state === "confirmed" ||
      booking.state === "pending") &&
    isBefore(new Date(), new Date(booking.date));

  const handleCancel = () => {};
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex justify-between gap-2 p-4 items-center">
          <h4 className="text-xl font-semibold truncate text-primary font-mono">
            {merchant?.name}
          </h4>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <p className="text-muted-foreground uppercase text-[8px]">
                Powered by
              </p>
              <p className="text-sm font-semibold text-primary tracking-wider">
                {process.env.NEXT_PUBLIC_APP_NAME}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-4 pb-8 gap-6 bg-accent overflow-y-auto scrollbar-app">
          {/* <p className="font-medium">Transaction information</p> */}
          <div className="flex flex-col gap-4 bg-white shadow-sm rounded-lg p-4">
            <p className="text text-sm font-semibold">Billing information</p>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground ">Total</p>
                <p className="text-sm font-medium">
                  {booking?.merchant?.currency}
                  {totalPrice}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground ">Status</p>
                <Badge
                  variant={"outline"}
                  className={cn("capitalize", {
                    "bg-green-500/50":
                      booking.state === "confirmed" || booking.state === "done",
                    "bg-red-500/50": booking.state === "unconfirm",
                    "bg-yellow-500/50": booking.state === "pending",
                    "bg-pink-500/50":
                      booking.state === "serving" ||
                      booking.state === "waiting",
                    "bg-gray-300/50": booking.state === "canceled",
                  })}
                >
                  {booking.state}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground ">Booked on</p>
                <p className="text-sm">
                  {format(booking?.createdAt ?? new Date(), "p - yyyy-MM-dd")}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground ">Token</p>
                <p className="text-sm text-primary cursor-pointer flex items-center hover:underline">
                  {booking?.token}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 rounded-lg border">
              <Barcode fontSize={13} value={booking?.token ?? ""} height={50} />
            </div>

            <Separator />
            <div className="flex justify-center items-center gap-3">
              <Link href={`/${merchant?.slug}/booking`}>
                <Button className="w-full" variant={"outline"}>
                  Book another appointment
                </Button>
              </Link>

              {canCancel && (
                <Button
                  onClick={handleCancel}
                  className="w-full"
                  variant={"destructive"}
                >
                  Cancel appointment
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-white shadow-sm rounded-lg p-4">
            <p className="text text-sm font-semibold">
              Appointment information
            </p>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground ">Name</p>
                <p className="text-sm font-medium">
                  {booking?.name ?? "Walk-in"}
                </p>
              </div>

              {booking?.client?.email && (
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm">{booking?.client?.email}</p>
                </div>
              )}

              {booking?.client?.phone && (
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm">
                    {formatNumber(
                      addPlus(booking?.client?.phone),
                      "INTERNATIONAL"
                    )}
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Begin at</p>
                <p className="text-sm font-medium">
                  {convertMinutesToHourMinutes(beginAt, true)} -{" "}
                  {booking?.date.toString()}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Services</p>
                <p className="text-sm text-right font-medium">
                  {booking.bookingServices
                    .map((sv) => {
                      return sv.service?.name;
                    })
                    .filter(Boolean)
                    .join("/")}
                </p>
              </div>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground text-center">
              Hotline support:{" "}
              <span className="text-primary">
                {formatNumber(
                  addPlus(booking.merchant?.phone ?? ""),
                  "INTERNATIONAL"
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
