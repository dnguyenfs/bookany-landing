"use client";
import {
  getAlertDialogAction,
  getAlertDialogContent,
  getAlertDialogDescription,
  getAlertDialogFooter,
  getAlertDialogHeader,
  getAlertDialogRoot,
  getAlertDialogTitle,
} from "@/components/alert-dialog-responsive";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DefaultMerchantOnlineColorHex } from "@/const";
import { useMediaQuery } from "@/hooks/use-media-query";
import { hexToHSL } from "@/lib/color";
import { convertMinutesToHourMinutes } from "@/lib/datetime";
import { cn } from "@/lib/utils";
import { addPlus } from "@/lib/utils/phone";
import { IBooking } from "@/types/booking";
import { format, isBefore, isSameDay, set } from "date-fns";
import { formatNumber } from "libphonenumber-js";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Barcode from "react-barcode";
import { cancelBookingAction } from "./action";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";

type Props = {
  booking: IBooking;
};

export default function DefaultBookingPage({ booking: defaultBooking }: Props) {
  const [booking, setBooking] = useState<IBooking>(defaultBooking);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [hasHydratedColor, setHasHydratedColor] = useState(false);
  const merchant = booking.merchant;
  const [openCancel, setOpenCancel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const cancelBeforeHours = 2;

  const currentMinutes = new Date().getMinutes();

  const validHoursCancel =
    isBefore(new Date(), new Date(booking.date)) ||
    (isSameDay(new Date(), new Date(booking.date)) &&
      currentMinutes + cancelBeforeHours * 60 < beginAt);

  const canCancel =
    (booking.state === "unconfirm" ||
      booking.state === "confirmed" ||
      booking.state === "pending") &&
    validHoursCancel;

  const AlertDialog = getAlertDialogRoot(isDesktop);
  const AlertDialogContent = getAlertDialogContent(isDesktop);
  const AlertDialogHeader = getAlertDialogHeader(isDesktop);
  const AlertDialogFooter = getAlertDialogFooter(isDesktop);
  const AlertDialogTitle = getAlertDialogTitle(isDesktop);
  const AlertDialogDescription = getAlertDialogDescription(isDesktop);

  const handleCancelBooking = async () => {
    setIsSubmitting(true);
    if (!booking.token) {
      toast.info("There was an error cancelling the appointment");
      setIsSubmitting(false);
      return;
    }

    const [res, error] = await cancelBookingAction(
      booking.token,
      navigator.userAgent
    );
    if (error) {
      toast.info(error.message);
      setIsSubmitting(false);
      return;
    }
    if (res) {
      setBooking(res);
      setOpenCancel(false);
      toast.info("Appointment cancelled successfully");
    }
  };
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
            <p className="text-sm text-muted-foreground text-center">
              Thank you for booking with us.
            </p>
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
      <div className="flex justify-between gap-2 p-4  items-center border-t w-full">
        <Link className="w-full" href={`/${merchant?.slug}/booking`}>
          <Button className="w-full">Book another appointment</Button>
        </Link>

        {canCancel && (
          <Button
            onClick={() => setOpenCancel(true)}
            className="w-full"
            variant={"destructive"}
          >
            Cancel appointment
          </Button>
        )}
      </div>
      <AlertDialog open={openCancel} onOpenChange={setOpenCancel}>
        <AlertDialogContent className="w-full md:max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel appointment</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this appointment? You can't undo
              this action.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              disabled={isSubmitting}
              className={cn(
                "w-full md:w-auto",
                buttonVariants({ variant: "destructive" })
              )}
              onClick={handleCancelBooking}
            >
              Continue{" "}
              {isSubmitting && (
                <LoaderCircleIcon className="ml-2 w-5 h-5 animate-spin" />
              )}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
