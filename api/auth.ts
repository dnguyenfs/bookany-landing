import axios from "@/lib/axios";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export type PreCheckTokenType = { sessionId: string };

export async function precheckTokenApi(
  code: string,
  userAgent: string
): Promise<PreCheckTokenType> {
  const res = await axios.post(
    "/auth/pre-check-token",
    {
      code,
      identity: "Customer",
    },
    {
      headers: {
        "User-Agent": userAgent,
      },
    }
  );

  return res.data;
}

export async function savePhoneNumberApi(
  phone: string,
  userAgent: string
): Promise<IUser> {
  "use server";
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  const res = await axios.post(
    "/auth/update-phone",
    {
      phone,
    },
    {
      headers: {
        "User-Agent": userAgent,
        Cookie: `authentication=${authentication?.value};`,
      },
    }
  );

  return res.data;
}
