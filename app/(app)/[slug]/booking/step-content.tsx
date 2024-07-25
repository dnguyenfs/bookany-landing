import { ChooseServices } from "./choose-services";
import { ChooseStaff } from "./choose-staff";
import { ChooseDate } from "./choose-date";
import { Confirm } from "./confirm";
import { useBookingStore } from "./context";
import { cn } from "@/lib/utils";

export default function StepContent() {
  const step = useBookingStore((s) => s.step);
  const user = useBookingStore((s) => s.user);
  const merchant = useBookingStore((s) => s.merchant);

  const requiredAuthenticated = merchant.settings.requiredAuthenticated;

  const hideScroll = step === "confirm" && !user && requiredAuthenticated;

  return (
    <div
      className={cn("flex-1 overflow-y-auto scrollbar-app", {
        "overflow-y-hidden": hideScroll,
      })}
    >
      {step === "services" && <ChooseServices />}
      {step === "staff" && <ChooseStaff />}
      {step === "date" && <ChooseDate />}
      {step === "confirm" && <Confirm />}
    </div>
  );
}
