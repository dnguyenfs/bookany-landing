"use client";
import { Branding } from "./branding";
import { Steps } from "./steps";
import { BookingStoreProvider, useBookingStore } from "./context";
import { LoaderIcon } from "lucide-react";
import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";
import { IStaff } from "@/types/staff";
import { useEffect, useState } from "react";
import { DefaultMerchantOnlineColorHex } from "@/const";
import { hexToHSL } from "@/lib/color";
import { Footer } from "../footer";
import CartTracking from "./cart-tracking";
import StepContent from "./step-content";
import { IService } from "@/types/service";

type Props = {
  merchant: IMerchant;
  slug: string;
  categories: ICategory[];
  staff: IStaff[];
};

export default function Booking(props: Props) {
  const serviceMapping = props.categories.reduce((acc, categories) => {
    categories.services.forEach((service) => {
      acc.set(service.id, service);
    });
    return acc;
  }, new Map<string, IService>());

  const staffMapping = props.staff.reduce((acc, staff) => {
    acc.set(staff.id, staff);
    return acc;
  }, new Map<string, IStaff>());

  return (
    <BookingStoreProvider
      initialState={{
        ...props,
        serviceMapping,
        staffMapping,
      }}
    >
      <BookingApp />
    </BookingStoreProvider>
  );
}

export function BookingApp() {
  const merchant = useBookingStore((s) => s.merchant);
  const [hasHydratedColor, setHasHydratedColor] = useState(false);

  const merchantHexColor =
    merchant.settings.hexColor ?? DefaultMerchantOnlineColorHex;

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
        <LoaderIcon className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Branding />
          <Steps />
          <div className="flex-1 overflow-y-auto scrollbar-app">
            <StepContent />
          </div>
        </div>
        <CartTracking />
      </div>
      <Footer />
    </div>
  );
}
