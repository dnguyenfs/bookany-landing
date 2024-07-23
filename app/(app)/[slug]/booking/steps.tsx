import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import { useBookingStore } from "./context";

export function Steps() {
  const step = useBookingStore((s) => s.step);
  return (
    <div className="flex items-center justify-between gap-2 px-3 pb-2 shadow-sm">
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={step === "services" ? "default" : "ghost"}
      >
        Services
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={step === "staff" ? "default" : "ghost"}
      >
        Staff
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={step === "date" ? "default" : "ghost"}
      >
        Date & Time
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={step === "confirm" ? "default" : "ghost"}
      >
        Confirm
      </Button>
    </div>
  );
}
