"use client";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChooseServices } from "./booking/choose-services";
import { ICategory } from "@/types/category";
import { IMerchant } from "@/types/merchant";

type Props = {
  categories: ICategory[];
  merchant: IMerchant;
};

export function MerchantServices({ categories, merchant }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-full">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold px-4">Services</h4>
        <ChooseServices
          type="preview"
          categories={categories}
          merchant={merchant}
        />
      </div>
    </div>
  );
}
