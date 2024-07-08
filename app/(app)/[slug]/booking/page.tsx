import { Button } from "@/components/ui/button";

import { Branding } from "./branding";
import { Steps } from "./steps";
import { ChooseServices } from "./choose-services";
import { ChooseStaff } from "./choose-staff";
import { ChooseDate } from "./choose-date";

export default function BookingPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Branding />
        <Steps />
        <div className="flex-1 overflow-y-auto scrollbar-app">
          {/* <ChooseServices />
          <ChooseStaff /> */}

          <ChooseDate />
        </div>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2 items-center shadow">
        <div className="flex flex-col">
          <p className="text-sm font-semibold">CA$150</p>
          <p className="text-muted-foreground text-xs">2 services • 2 hours</p>
        </div>
        <Button variant={"default"}>Continue</Button>
      </div>
    </div>
  );
}
