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
    <main className="flex max-h-[-webkit-fill-available] h-screen flex-col bg-accent">
      {children}
    </main>
  );
}
