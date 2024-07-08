import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Footer } from "./footer";

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
        "sm:rounded-3xl max-w-xs min-w-full sm:min-w-[475px] sm:my-10 m-auto bg-background sm:shadow h-full overflow-hidden flex flex-col",
        "my-0 rounded-none shadow-none"
      )}
    >
      <div className="flex-1 overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
}
