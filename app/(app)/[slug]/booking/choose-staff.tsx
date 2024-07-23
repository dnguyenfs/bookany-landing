import { ChevronRightIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import { matchStaffSelector, useBookingStore } from "./context";
import { getImagePathUrl } from "@/lib/image";
import { cn } from "@/lib/utils";

export function ChooseStaff() {
  const staffId = useBookingStore((s) => s.staffId);
  const staffList = useBookingStore(matchStaffSelector);
  const selectStaff = useBookingStore((s) => s.selectStaff);
  const nextStep = useBookingStore((s) => s.nextStep);

  const handleSelectStaff = (staffId: string) => {
    selectStaff(staffId);
    nextStep();
  };

  return (
    <div className="flex flex-col divide-y">
      <div
        onClick={() => handleSelectStaff("_system")}
        className={cn(
          "flex items-center justify-between gap-8 px-4 hover:bg-primary/10 py-4 cursor-pointer",
          {
            "bg-primary/10": staffId === "_system",
          }
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center">
            <UsersIcon className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="">Anyone</p>
            <p className="text-muted-foreground text-xs uppercase">TUE-SAT</p>
          </div>
        </div>
        <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
      </div>
      {staffList.map((staff, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center justify-between gap-8 px-4 hover:bg-primary/10 py-4 cursor-pointer",
            {
              "bg-primary/10": staffId === staff.id,
            }
          )}
          onClick={() => handleSelectStaff(staff.id)}
        >
          <div className="flex items-center gap-2">
            <Image
              src={
                getImagePathUrl(staff.imageKey ?? "") ??
                "https://avatar.vercel.sh/personal.png"
              }
              width={40}
              height={40}
              className="rounded-full"
              alt={"staff avatar"}
            />
            <div className="flex flex-col gap-1">
              <p className="">{staff.name}</p>
              <p className="text-muted-foreground text-xs uppercase">TUE-SAT</p>
            </div>
          </div>
          <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
        </div>
      ))}
    </div>
  );
}
