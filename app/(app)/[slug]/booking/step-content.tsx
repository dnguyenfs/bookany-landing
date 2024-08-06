import { ChooseServices } from "./choose-services";
import { ChooseStaff } from "./choose-staff";
import { ChooseDate } from "./choose-date";
import { Confirm } from "./confirm";
import { useBookingStore } from "./context";
import { cn } from "@/lib/utils";
import { Billing } from "./billing";

export default function StepContent() {
  const step = useBookingStore((s) => s.step);
  const user = useBookingStore((s) => s.user);
  const merchant = useBookingStore((s) => s.merchant);
  const isInjectLink = useBookingStore((s) => s.isInjectLink);

  const settingRequiredAuthenticated = merchant.settings.requiredAuthenticated;
  const collectPhone = merchant.settings.collectPhone;

  const requiredAuthenticated = settingRequiredAuthenticated && !isInjectLink;

  const hideScroll =
    step === "confirm" &&
    ((!user && requiredAuthenticated) || (user && collectPhone && !user.phone));

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
      {step === "billing" && <Billing />}
    </div>
  );
}
