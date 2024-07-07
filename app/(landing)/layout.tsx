import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { PageHeader } from "../components/page-header";
import { PageFooter } from "../components/page-footer";

export const metadata: Metadata = {
  title: "Bookany | Welcome to the Future",
  description:
    "Bookany is a SaaS platform for creating and managing your online booking system",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader />
      {children}
      <PageFooter />
    </main>
  );
}
