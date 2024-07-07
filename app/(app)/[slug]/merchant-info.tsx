import { Badge } from "@/components/ui/badge";

export function MerchantInfo() {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xl font-semibold truncate">
        The Right Spot Urban Space The Right Spot Urban Space
      </h4>
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-sm truncate">
          Central, Hong Kong island
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
