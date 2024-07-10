import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  HeartIcon,
  HistoryIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";

export function Footer() {
  return (
    <div className="flex justify-center gap-8 px-4 py-3 rounded-t-3xl shadow">
      <Button
        size="icon"
        className="w-12 h-12 rounded-full"
        variant={"default"}
      >
        <CalendarIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" className="w-12 h-12 rounded-full" variant={"ghost"}>
        <SearchIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" className="w-12 h-12 rounded-full" variant={"ghost"}>
        <HistoryIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" className="w-12 h-12 rounded-full" variant={"ghost"}>
        <HeartIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" className="w-12 h-12 rounded-full" variant={"ghost"}>
        <UserRoundIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
