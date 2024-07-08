import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  HistoryIcon,
  SearchIcon,
  UserRoundIcon,
} from "lucide-react";

export function Footer() {
  return (
    <div className="flex justify-center gap-8 px-4 py-2 shadow">
      <Button size="icon" variant={"default"}>
        <CalendarIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" variant={"ghost"}>
        <SearchIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" variant={"ghost"}>
        <HistoryIcon className="w-6 h-6" />
      </Button>

      <Button size="icon" variant={"ghost"}>
        <UserRoundIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
