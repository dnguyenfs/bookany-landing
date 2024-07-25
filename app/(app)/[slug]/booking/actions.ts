"use server";
import { precheckTokenApi, PreCheckTokenType } from "@/api/auth";
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
