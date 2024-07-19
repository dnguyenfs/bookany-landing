"use client";
import { Button } from "@/components/ui/button";
import { Branding } from "./branding";
import { Steps } from "./steps";
import { ChooseServices } from "./choose-services";
import { ChooseStaff } from "./choose-staff";
import { ChooseDate } from "./choose-date";
import { Confirm } from "./confirm";
import { BookingStoreProvider, useBookingStore } from "./context";
import { LoaderIcon } from "lucide-react";

import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";
import { IStaff } from "@/types/staff";
import { useEffect, useState } from "react";
import { DefaultMerchantOnlineColorHex } from "@/const";
import { hexToHSL } from "@/lib/color";

type Props = {
  merchant: IMerchant;
  slug: string;
  categories: ICategory[];
  staff: IStaff[];
};

export default function Booking(props: Props) {
  return (
    <BookingStoreProvider>
      <BookingApp {...props} />
    </BookingStoreProvider>
  );
}

export function BookingApp({ merchant, slug, categories, staff }: Props) {
  const step = useBookingStore((s) => s.step);
  const setStep = useBookingStore((s) => s.setStep);
  const _hasHydrated = useBookingStore((s) => s._hasHydrated);
  const [hasHydratedColor, setHasHydratedColor] = useState(false);

  const merchantHexColor =
    merchant.settings.hexColor ?? DefaultMerchantOnlineColorHex;

  const nextStep = () => {
    if (step === "services") {
      setStep("staff");
    } else if (step === "staff") {
      setStep("date");
    } else if (step === "date") {
      setStep("confirm");
    }
  };

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

  if (!hasHydratedColor) return null;

  if (!_hasHydrated) {
    return (
      <div className="flex flex-col h-full w-full justify-center items-center text-primary">
        <LoaderIcon className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Branding merchant={merchant} />
        <Steps />
        <div className="flex-1 overflow-y-auto scrollbar-app">
          {step === "services" && (
            <ChooseServices
              categories={categories}
              merchant={merchant}
              type="booking"
            />
          )}
          {step === "staff" && <ChooseStaff />}
          {step === "date" && <ChooseDate />}
          {step === "confirm" && <Confirm />}
        </div>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2 items-center shadow">
        <div className="flex flex-col">
          <p className="text-sm font-semibold">CA$150</p>
          <p className="text-muted-foreground text-xs">2 services • 2 hours</p>
        </div>
        <Button onClick={nextStep} variant={"default"}>
          Continue
        </Button>
      </div>
    </div>
  );
}
