"use client";

import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";
import { MerchantImages } from "./carousel";
import { MerchantInfo } from "./merchant-info";
import { MerchantServices } from "./merchant-services";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { hexToHSL } from "@/lib/color";
import { DefaultMerchantOnlineColorHex } from "@/const";
import { Footer } from "./footer";
import { Services } from "@/app/components/services";

type Props = {
  merchant: IMerchant;
  categories: ICategory[];
};

export default function Merchant({ merchant, categories }: Props) {
  const [hasHydrated, setHasHydrated] = useState(false);

  const servicesCount = categories.reduce(
    (acc, category) => acc + category.services.length,
    0
  );

  const merchantHexColor =
    merchant.settings.hexColor ?? DefaultMerchantOnlineColorHex;

  const enableOnlineBooking = merchant.settings.enableOnlineBooking;

  useEffect(() => {
    const initAppColor = async () => {
      if (merchantHexColor) {
        document.documentElement.style.setProperty(
          "--primary",
          `${hexToHSL(merchantHexColor)}`
        );

        console.log("hexToHSL(merchantHexColor)", hexToHSL(merchantHexColor));
      }
      setHasHydrated(true);
    };
    initAppColor();
  }, [merchantHexColor]);

  if (!hasHydrated) return null;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex flex-col h-full w-full">
          <div className="flex-1 flex flex-col overflow-hidden">
            <MerchantImages merchant={merchant} />
            <div className="flex-1 flex flex-col gap-8 overflow-y-auto overflow-x-hidden w-full scrollbar-app">
              <MerchantInfo merchant={merchant} />
              <Services merchant={merchant} categories={categories} />
            </div>
          </div>
          <div className="flex justify-between gap-2 px-4 py-2 items-center shadow">
            <p className="text-muted-foreground text-sm">
              {servicesCount} services available
            </p>
            {enableOnlineBooking && (
              <Button variant={"default"}>Book Now</Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
