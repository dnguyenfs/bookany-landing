import axios from "@/lib/axios";
import { IUser } from "@/types/user";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export type PreCheckTokenType = { sessionId: string };

export async function precheckTokenApi(
  code: string,
  userAgent: string
): Promise<PreCheckTokenType> {
  try {
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
  } catch (e) {
    throw e;
  }
}

export async function savePhoneNumberApi(
  phone: string,
  userAgent: string
): Promise<IUser> {
  "use server";
  try {
    const cookieStore = cookies();
    const authentication = cookieStore.get("authentication");

    console.log("authentication", authentication);
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
  } catch (e) {
    throw e;
  }
}
