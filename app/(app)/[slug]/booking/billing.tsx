"use client";
import { useBookingStore } from "./context";
import { format } from "date-fns";
import { ChevronRight, CircleCheckBig } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Barcode from "react-barcode";
import { addPlus } from "@/lib/utils/phone";
import { formatNumber } from "libphonenumber-js";

export function Billing() {
  const merchant = useBookingStore((s) => s.merchant);
  const services = useBookingStore((s) => s.services);
  const serviceMapping = useBookingStore((s) => s.serviceMapping);
  const reset = useBookingStore((s) => s.reset);
  const user = useBookingStore((s) => s.user);

  const handleBookAnother = () => {
    reset();
  };

  return (
    <div className="flex flex-col relative p-4 bg-accent h-full gap-6">
      <div className="flex flex-col gap-4 bg-white shadow-sm rounded-lg p-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <CircleCheckBig className="w-12 h-12 text-green-500" />
          <p className="text-sm text-muted-foreground">
            Transaction successful
          </p>
          <p className="text-xl font-medium">{merchant.currency}110</p>
        </div>
        <Separator />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground ">Booked on</p>
            <p className="text-sm">{format(new Date(), "p - dd/MM/yyyy")}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground ">Detail transaction</p>
            <p className="text-sm text-primary cursor-pointer flex items-center hover:underline">
              6333091218241231 <ChevronRight className="w-4 h-4 inline-block" />
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border">
          <Barcode fontSize={13} value={"6333091218241231"} height={50} />
        </div>

        <Separator />

        <div className="flex justify-center items-center gap-3">
          <Button onClick={handleBookAnother} variant={"outline"}>
            Book another appointment
          </Button>
          <Button>Google Review</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white shadow-sm rounded-lg p-4">
        <p className="text text-sm font-semibold">Appointment information</p>
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground ">Name</p>
            <p className="text-sm font-medium">{user?.name ?? "Walk-in"}</p>
          </div>

          {user?.email && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm">{user.email}</p>
            </div>
          )}

          {user?.phone && (
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-sm">
                {formatNumber(addPlus(user.phone), "INTERNATIONAL")}
              </p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Begin at</p>
            <p className="text-sm font-medium">
              {format(new Date(), "p - dd/MM/yyyy")}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-muted-foreground">Services</p>
            <p className="text-sm text-right font-medium">
              {services.map((sv) => {
                const service = serviceMapping.get(sv.id);
                if (!service) return null;
                return (
                  <li key={sv.id} className="text-sm font-medium">
                    {service.name}
                  </li>
                );
              })}
            </p>
          </div>
        </div>
        <Separator />
        <p className="text-sm text-muted-foreground text-center">
          Thank you for booking with us.
        </p>
      </div>
    </div>
  );
}
