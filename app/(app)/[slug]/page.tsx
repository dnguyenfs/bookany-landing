import * as React from "react";
import { MerchantImages } from "./carousel";
import { Button } from "@/components/ui/button";
import { MerchantInfo } from "./merchant-info";
import { MerchantServices } from "./merchant-services";
import { Metadata, ResolvingMetadata } from "next";
import { getMerchantInfoApi } from "@/api/merchant";
import { getCategoriesApi } from "@/api/categories";
import Merchant from "./merchant";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  // fetch data
  const merchant = await getMerchantInfoApi(params.slug);

  // optionally access and extend (rather than replace) parent metadata
  const logoUrl = merchant.logoUrl ?? "";
  const coverUrl = merchant.coverUrl ?? "";

  return {
    title: `Bookany | ${merchant.name}`,
    description:
      merchant.description ??
      "Bookany is a SaaS platform for creating and managing your online booking system",
    openGraph: {
      images: [logoUrl, coverUrl],
    },
  };
}

export default async function MerchantDetail({ params }: Props) {
  const [merchant, categories] = await Promise.all([
    getMerchantInfoApi(params.slug),
    getCategoriesApi(params.slug),
  ]);

  return <Merchant merchant={merchant} categories={categories} />;
}
