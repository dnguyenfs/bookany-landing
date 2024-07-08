"use client";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChooseServices } from "./booking/choose-services";

export function MerchantServices() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-full">
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-semibold px-4">Services</h4>
        <ChooseServices />
      </div>
    </div>
  );
}
