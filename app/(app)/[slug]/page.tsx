import * as React from "react";
import { MerchantImages } from "./carousel";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MerchantInfo } from "./merchant-info";
import { MerchantServices } from "./merchant-services";

export default function MerchantDetail() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col overflow-hidden">
        <MerchantImages />
        <div className="flex-1 flex flex-col gap-8 overflow-y-auto overflow-x-hidden w-full scrollbar-app">
          <MerchantInfo />
          <MerchantServices />
        </div>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2 items-center shadow">
        <p className="text-muted-foreground text-sm">78 services available</p>
        <Button variant={"default"}>Book Now</Button>
      </div>
    </div>
  );
}
