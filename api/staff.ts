import { IStaff } from "@/types/staff";

export async function getStaffsApi(slug: string): Promise<IStaff[]> {
  const res = await fetch(`${process.env.API_URL}/online/${slug}/staff`);
  if (!res.ok) {
    throw new Error("Failed to fetch staff");
  }
  const data = await res.json();
  return data;
}
