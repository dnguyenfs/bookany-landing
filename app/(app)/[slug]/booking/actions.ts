"use server";
import { LogoutApi } from "@/api/account";
import {
  precheckTokenApi,
  PreCheckTokenType,
  savePhoneNumberApi,
} from "@/api/auth";
// import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function precheckToken({
  code,
  slug,
  userAgent,
}: {
  code: string;
  slug: string;
  userAgent: string;
}): Promise<PreCheckTokenType> {
  try {
    const res = await precheckTokenApi(code, userAgent);
    // revalidatePath(`/${slug}/booking`);
    const cookieStore = cookies();
    cookieStore.set("authentication", res.sessionId);
    return res;
  } catch (error) {
    throw error;
  }
}

type SavePhoneNumberType = {
  phone: string;
  userAgent: string;
};

export async function savePhoneNumber({
  phone,
  userAgent,
}: SavePhoneNumberType) {
  try {
    const res = await savePhoneNumberApi(phone, userAgent);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await LogoutApi();
    const cookieStore = cookies();
    cookieStore.delete("authentication");
  } catch (error) {
    throw error;
  }
}
