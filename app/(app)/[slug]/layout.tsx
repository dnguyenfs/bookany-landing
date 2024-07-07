import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookany App | Welcome to the Future",
  description:
    "Bookany is a SaaS platform for creating and managing your online booking system",
};

export default function MerchantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "sm:rounded-3xl max-w-xs min-w-full sm:min-w-[500px] sm:my-10 m-auto bg-background sm:shadow h-full overflow-hidden",
        "my-0 rounded-none shadow-none"
      )}
    >
      {children}
    </div>
  );
}
