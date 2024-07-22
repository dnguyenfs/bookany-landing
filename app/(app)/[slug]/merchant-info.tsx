import { Badge } from "@/components/ui/badge";
import { IMerchant } from "@/types/merchant";

type Props = {
  merchant: IMerchant;
};

export function MerchantInfo({ merchant }: Props) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h4 className="text-xl font-semibold truncate text-primary  ">
        {merchant.name}
      </h4>
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-sm truncate">
          {merchant.address}
        </p>
        <p className="text-muted-foreground text-sm truncate">
          Open until 20:00
        </p>
      </div>
      <div className="flex items-center gap-1">
        <Badge variant={"outline"}>Features</Badge>
        <Badge variant={"destructive"}>Details</Badge>
      </div>
    </div>
  );
}
