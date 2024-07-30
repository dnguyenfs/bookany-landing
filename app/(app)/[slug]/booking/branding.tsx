import {
  CalendarIcon,
  HeartIcon,
  LogOutIcon,
  UserIcon,
  UserRoundIcon,
} from "lucide-react";
import { useBookingStore } from "./context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { logoutAction } from "./actions";
import { useState } from "react";
import { toast } from "sonner";

export function Branding() {
  const merchant = useBookingStore((s) => s.merchant);
  const user = useBookingStore((s) => s.user);
  const setUser = useBookingStore((s) => s.setUser);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openVault, setOpenVault] = useState(false);

  const handleLogout = async () => {
    const error = await logoutAction();
    if (error) {
      toast.info(error.message);
      return;
    }
    setUser(null);
    if (!isDesktop) setOpenVault(false);
  };

  return (
    <div className="flex justify-between gap-2 p-4 items-center">
      <h4 className="text-xl font-semibold truncate text-primary font-mono">
        {merchant.name}
      </h4>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <p className="text-muted-foreground uppercase text-[8px]">
            Powered by
          </p>
          <p className="text-sm font-semibold text-primary tracking-wider">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </p>
        </div>
        {user &&
          (isDesktop ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <UserIcon className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/appointment-histories">
                    <DropdownMenuItem>
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      Appointment histories
                    </DropdownMenuItem>
                  </Link>

                  <Link href="/favorites">
                    <DropdownMenuItem>
                      <HeartIcon className="w-5 h-5 mr-2" />
                      Favorites
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/profile">
                    <DropdownMenuItem>
                      <UserRoundIcon className="w-5 h-5 mr-2" />
                      Profile
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={handleLogout}>
                    <LogOutIcon className="w-5 h-5 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Drawer open={openVault} onOpenChange={setOpenVault}>
              <DrawerTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <UserIcon className="w-5 h-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="text-center">
                  <DrawerTitle>{user.name}</DrawerTitle>
                  <DrawerDescription>{user.email}</DrawerDescription>
                </DrawerHeader>
                <Separator className="w-60 mx-auto" />
                <div className="w-full h-full flex flex-col py-4 items-center">
                  <Link
                    href="/appointment-histories"
                    className={
                      "relative hover:bg-accent min-w-[200px] flex cursor-pointer select-none  items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    }
                  >
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Appointment histories
                  </Link>
                  <Link
                    href="/favorites"
                    className={
                      "relative hover:bg-accent min-w-[200px] flex cursor-pointer select-none  items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    }
                  >
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Favorites
                  </Link>

                  <Link
                    href="/profile"
                    className={
                      "relative hover:bg-accent min-w-[200px] flex cursor-pointer select-none  items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    }
                  >
                    <UserRoundIcon className="w-5 h-5 mr-2" />
                    Profile
                  </Link>
                </div>
                <Separator className="w-60 mx-auto" />
                <div className="py-4 flex flex-col items-center">
                  <div
                    className={
                      "relative hover:bg-accent min-w-[200px] flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    }
                    onClick={handleLogout}
                  >
                    <LogOutIcon className="w-5 h-5 mr-2" />
                    Log out
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          ))}
      </div>
    </div>
  );
}
