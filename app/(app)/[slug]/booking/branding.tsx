import { IMerchant } from "@/types/merchant";
import Image from "next/image";

type Props = {
  merchant: IMerchant;
};

export function Branding({ merchant }: Props) {
  return (
    <div className="flex justify-between gap-2 p-4 items-center">
      <h4 className="text-xl font-semibold truncate text-primary">
        {merchant.name}
      </h4>
      <div className="flex flex-col items-end">
        <p className="text-muted-foreground uppercase text-[8px]">Powered by</p>
        <p className="text-muted-foreground text-sm font-semibold tracking-wider">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </p>
      </div>
    </div>
  );
}
