import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { PageHeader } from "../components/page-header";
import { PageFooter } from "../components/page-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
