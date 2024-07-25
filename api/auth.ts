import axios from "@/lib/axios";
import { AxiosError } from "axios";

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
