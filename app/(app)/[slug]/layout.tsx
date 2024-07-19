import { cn } from "@/lib/utils";
export default async function MerchantLayout({
  params,
  children,
}: Readonly<{
  params: { slug: string };
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "sm:rounded-3xl max-w-xs min-w-full sm:min-w-[475px] sm:my-10 m-auto bg-background sm:shadow h-full overflow-hidden flex flex-col",
        "my-0 rounded-none shadow-none"
      )}
    >
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
