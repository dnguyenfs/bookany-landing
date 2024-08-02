import { Metadata, ResolvingMetadata } from "next";
import { getMerchantInfoApi } from "@/api/merchant";
import { getCategoriesApi } from "@/api/categories";
import Booking from "./booking";
import { getStaffsApi } from "@/api/staff";
import { getProfileApi } from "@/api/account";

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
    title: `Bookany | Booking for ${merchant.name}`,
    description:
      merchant.description ??
      "Bookany is a SaaS platform for creating and managing your online booking system",
    openGraph: {
      images: [logoUrl, coverUrl],
    },
  };
}

export default async function BookingPage({ params }: Props) {
  const [merchant, categories, staff, user] = await Promise.all([
    getMerchantInfoApi(params.slug),
    getCategoriesApi(params.slug),
    getStaffsApi(params.slug),
    getProfileApi(),
  ]);

  return (
    <Booking
      merchant={merchant}
      categories={categories}
      slug={params.slug}
      staff={staff}
      user={user}
    />
  );
}
