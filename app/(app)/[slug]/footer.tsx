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
    <div className="flex justify-center gap-6 px-4 py-3 rounded-t-3xl shadow">
      <Button
        size="icon"
        className="w-12 h-12 rounded-full flex-none"
        variant={"default"}
      >
        <CalendarIcon className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        className="w-12 h-12 rounded-full flex-none"
        variant={"ghost"}
      >
        <SearchIcon className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        className="w-12 h-12 rounded-full  flex-none"
        variant={"ghost"}
      >
        <HistoryIcon className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        className="w-12 h-12 rounded-full  flex-none"
        variant={"ghost"}
      >
        <HeartIcon className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        className="w-12 h-12 rounded-full  flex-none"
        variant={"ghost"}
      >
        <UserRoundIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
