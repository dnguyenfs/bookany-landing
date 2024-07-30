import { IMerchant } from "@/types/merchant";
import axios from "@/lib/axios";

export async function getMerchantInfoApi(slug: string): Promise<IMerchant> {
  const res = await axios.get(`/online/${slug}/merchant`);
  return res.data;
}
