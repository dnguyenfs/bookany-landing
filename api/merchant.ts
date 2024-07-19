import { IMerchant } from "@/types/merchant";

export async function getMerchantInfoApi(slug: string): Promise<IMerchant> {
  const res = await fetch(`${process.env.API_URL}/online/${slug}/merchant`);

  if (!res.ok) {
    throw new Error("Failed to fetch merchant info");
  }
  const data = await res.json();
  return data;
}
