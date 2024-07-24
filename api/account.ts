import { IUser } from "@/types/user";

export async function getProfileApi(): Promise<IUser | null> {
  const res = await fetch(`${process.env.API_URL}/auth/profile`, {
    credentials: "include",
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}
