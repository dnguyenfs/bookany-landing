import { ChevronRightIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

export function ChooseStaff() {
  return (
    <div className="flex flex-col divide-y">
      <div className="flex items-center justify-between gap-8 px-4 hover:bg-primary/20 py-4 cursor-pointer">
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
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-8 px-4 hover:bg-primary/20 py-4 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Image
              src="https://avatar.vercel.sh/personal.png"
              width={40}
              height={40}
              className="rounded-full"
              alt={"staff avatar"}
            />
            <div className="flex flex-col gap-1">
              <p className="">Jessi Lopez</p>
              <p className="text-muted-foreground text-xs uppercase">TUE-SAT</p>
            </div>
          </div>
          <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
        </div>
      ))}
    </div>
  );
}
