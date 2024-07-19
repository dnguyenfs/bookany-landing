import * as React from "react";
import { MerchantImages } from "./carousel";
import { Button } from "@/components/ui/button";
import { MerchantInfo } from "./merchant-info";
import { MerchantServices } from "./merchant-services";
import { Metadata, ResolvingMetadata } from "next";
import { IMerchant } from "@/types/merchant";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getMerchantInfoApi(slug: string): Promise<IMerchant> {
  const res = await fetch(`${process.env.API_URL}/online/${slug}/merchant`);

  if (!res.ok) {
    throw new Error("Failed to fetch merchant info");
  }
  const data = await res.json();
  return data;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  // fetch data
  const merchant = await getMerchantInfoApi(slug);

  // optionally access and extend (rather than replace) parent metadata
  const logoUrl = merchant.logoUrl ?? "";
  const coverUrl = merchant.coverUrl ?? "";

  return {
    title: merchant.name,
    description: merchant.description ?? "A merchant website",
    openGraph: {
      images: [logoUrl, coverUrl],
    },
  };
}

export default async function MerchantDetail({ params }: Props) {
  const merchant = await getMerchantInfoApi(params.slug);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex-1 flex flex-col overflow-hidden">
        <MerchantImages merchant={merchant} />
        <div className="flex-1 flex flex-col gap-8 overflow-y-auto overflow-x-hidden w-full scrollbar-app">
          <MerchantInfo merchant={merchant} />
          <MerchantServices />
        </div>
      </div>
      <div className="flex justify-between gap-2 px-4 py-2 items-center shadow">
        <p className="text-muted-foreground text-sm">78 services available</p>
        <Button variant={"default"}>Book Now</Button>
      </div>
    </div>
  );
}
