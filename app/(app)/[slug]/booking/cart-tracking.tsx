import { Button } from "@/components/ui/button";
import { useBookingStore } from "./context";
import { IService } from "@/types/service";
import { castMinutesToHoursString } from "@/lib/datetime";

export default function CartTracking() {
  const merchant = useBookingStore((s) => s.merchant);
  const step = useBookingStore((s) => s.step);
  const services = useBookingStore((s) => s.services);
  const staffMapping = useBookingStore((s) => s.staffMapping);
  const serviceMapping = useBookingStore((s) => s.serviceMapping);
  const nextStep = useBookingStore((s) => s.nextStep);
  const prevStep = useBookingStore((s) => s.prevStep);

  const staffId = useBookingStore((s) => s.staffId);
  const showCart = step !== "confirm" && services.length > 0;

  if (!showCart) return null;

  const totalPrice = services.reduce((acc, service) => {
    const price = serviceMapping.get(service.id)?.price ?? 0;
    return acc + price;
  }, 0);

  const totalDuration = services.reduce((acc, service) => {
    const duration = serviceMapping.get(service.id)?.duration ?? 0;
    return acc + duration;
  }, 0);

  const serviceLength = services.length;

  const showPrev = step !== "services";
  const showNext = step === "services";

  return (
    <div className="flex justify-between gap-2 px-4 py-2 items-center border-t">
      <div className="flex flex-col">
        <p className="text-sm font-semibold">
          {merchant.currency}
          {totalPrice}
        </p>
        <p className="text-muted-foreground text-xs">
          {serviceLength} service{serviceLength > 1 ? "s" : ""} •{" "}
          {castMinutesToHoursString(totalDuration)}
        </p>
        {staffId && (
          <p className="text-muted-foreground text-xs">
            with{" "}
            <span className="font-semibold">
              {staffId === "_system"
                ? "Anyone"
                : staffMapping.get(staffId)?.name}
            </span>
          </p>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {showPrev && (
          <Button size="sm" onClick={prevStep} variant={"outline"}>
            Prev
          </Button>
        )}
        {showNext && (
          <Button size="sm" onClick={nextStep} variant={"default"}>
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
