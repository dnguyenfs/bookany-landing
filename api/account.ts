"use server";
import { IUser } from "@/types/user";
import axios from "@/lib/axios";
import { cookies } from "next/headers";

export async function getProfileApi(): Promise<IUser | null> {
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  const res = await fetch(
    `${process.env.API_URL}/auth/profile`,
    authentication?.value
      ? {
          headers: {
            Cookie: `authentication=${authentication.value};`,
          },
        }
      : {}
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}

export async function LogoutApi(): Promise<IUser | null> {
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  const res = await fetch(
    `${process.env.API_URL}/auth/signout`,
    authentication?.value
      ? {
          method: "POST",
          headers: {
            Cookie: `authentication=${authentication.value};`,
          },
        }
      : {
          method: "POST",
        }
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
}
