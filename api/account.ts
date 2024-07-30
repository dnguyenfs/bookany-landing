"use server";
import { IUser } from "@/types/user";
import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

export async function getProfileApi(): Promise<IUser | null> {
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  try {
    const res = await axios.get("/auth/profile", {
      headers: {
        Cookie: `authentication=${authentication?.value};`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return null;
    }
    throw error;
  }
}

export async function LogoutApi(): Promise<IUser | null> {
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  const res = await axios.post("/auth/signout", null, {
    headers: {
      Cookie: `authentication=${authentication?.value};`,
    },
  });

  return res.data;
}
