import { ChooseServices } from "./choose-services";
import { ChooseStaff } from "./choose-staff";
import { ChooseDate } from "./choose-date";
import { Confirm } from "./confirm";
import { useBookingStore } from "./context";

export default function StepContent() {
  const step = useBookingStore((s) => s.step);
  return (
    <>
      {step === "services" && <ChooseServices type="booking" />}
      {step === "staff" && <ChooseStaff />}
      {step === "date" && <ChooseDate />}
      {step === "confirm" && <Confirm />}
    </>
  );
}
