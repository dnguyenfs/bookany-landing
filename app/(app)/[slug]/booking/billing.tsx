"use client";
import { useBookingStore } from "./context";
import { format } from "date-fns";
import { ArrowRight, ChevronRight, CircleCheckBig } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import Barcode from "react-barcode";
import Link from "next/link";

export function Billing() {
  const merchant = useBookingStore((s) => s.merchant);
  const services = useBookingStore((s) => s.services);
  const serviceMapping = useBookingStore((s) => s.serviceMapping);
  const reset = useBookingStore((s) => s.reset);

  const handleBookAnother = () => {
    reset();
  };

  return (
    <div className="flex flex-col relative p-4 bg-accent h-full">
      <div className="flex flex-col gap-2 bg-white shadow-sm rounded-lg">
        <div className="flex flex-col justify-center items-center gap-2 p-4">
          <CircleCheckBig className="w-12 h-12 text-green-500" />
          <p className="text-sm text-muted-foreground">
            Transaction successful
          </p>
          <p className="text-xl font-medium">{merchant.currency}110</p>
        </div>
        <Separator />

        <div className="flex flex-col gap-2 p-4">
          <div className="flex justify-between">
            <p className="text-sm text-muted-foreground font-medium">
              Services
            </p>
            <ul className="text-sm text-right">
              <li className="text-sm font-semibold truncate">
                Medicure with max
              </li>
              <li className="text-sm font-semibold truncate">Pedicure</li>
              {services.map((sv) => {
                const service = serviceMapping.get(sv.id);
                if (!service) return null;
                return (
                  <li key={sv.id} className="text-sm font-semibold">
                    {service.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground font-medium">
              Booked on
            </p>
            <p className="text-sm">
              {format(new Date(), "HH:mm - dd/MM/yyyy")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground font-medium">
              Detail transaction
            </p>
            <p className="text-sm text-primary cursor-pointer flex items-center hover:underline">
              6333091218241231 <ChevronRight className="w-4 h-4 inline-block" />
            </p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col items-center justify-center gap-2 rounded-lg border">
            <Barcode fontSize={13} value={"6333091218241231"} height={50} />
          </div>
        </div>

        <Separator />

        <div className="flex justify-center items-center gap-3 py-4">
          <Button onClick={handleBookAnother} variant={"outline"}>
            Book another appointment
          </Button>
          <Button>Google Review</Button>
        </div>
      </div>
    </div>
  );
}
