"use server";
import { LogoutApi } from "@/api/account";
import {
  precheckTokenApi,
  PreCheckTokenType,
  savePhoneNumberApi,
} from "@/api/auth";
import {
  getTimeSlotsApi,
  IGetTimeSlotProps,
  ITimeSlotRes,
} from "@/api/time-slots";
import { IError } from "@/types/error";
import { IUser } from "@/types/user";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function precheckTokenAction({
  code,
  slug,
  userAgent,
}: {
  code: string;
  slug: string;
  userAgent: string;
}): Promise<[PreCheckTokenType | null, IError]> {
  try {
    const res = await precheckTokenApi(code, userAgent);
    const cookieStore = cookies();
    cookieStore.set("authentication", res.sessionId);
    return [res, null];
  } catch (error) {
    if (error instanceof AxiosError) {
      return [
        null,
        {
          ...error.response?.data,
          statusCode: error.response?.status,
        },
      ];
    }
    throw error;
  }
}

type SavePhoneNumberType = {
  phone: string;
  userAgent: string;
};

export async function savePhoneNumberAction({
  phone,
  userAgent,
}: SavePhoneNumberType): Promise<[IUser | null, IError]> {
  try {
    const res = await savePhoneNumberApi(phone, userAgent);
    return [res, null];
  } catch (error) {
    if (error instanceof AxiosError) {
      return [
        null,
        {
          ...error.response?.data,
          statusCode: error.response?.status,
        },
      ];
    }
    throw error;
  }
}

export async function logoutAction(): Promise<IError> {
  try {
    await LogoutApi();
    const cookieStore = cookies();
    cookieStore.delete("authentication");
    return null;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        ...error.response?.data,
        statusCode: error.response?.status,
      };
    }
    throw error;
  }
}

export async function getTimeSlotsAction(
  props: IGetTimeSlotProps
): Promise<[ITimeSlotRes | null, IError]> {
  try {
    const res = await getTimeSlotsApi(props);
    return [res, null];
  } catch (error) {
    if (error instanceof AxiosError) {
      return [
        null,
        {
          ...error.response?.data,
          statusCode: error.response?.status,
        },
      ];
    }
    throw error;
  }
}
