import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

export function Steps() {
  return (
    <div className="flex items-center justify-between gap-2 px-3 pb-2 shadow-sm">
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={"ghost"}
      >
        Services
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={"ghost"}
      >
        Staff
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={"ghost"}
      >
        Date & Time
      </Button>
      <ChevronRightIcon className="w-3 h-3 flex-none" />
      <Button
        className="text-xs md:text-sm px-1 md:px-3 h-6 md:h-8"
        variant={"default"}
      >
        Confirm
      </Button>
    </div>
  );
}
