import { IStaff } from "@/types/staff";
import axios from "@/lib/axios";

export async function getStaffsApi(slug: string): Promise<IStaff[]> {
  const res = await axios.get(`/online/${slug}/staff`);
  return res.data;
}
