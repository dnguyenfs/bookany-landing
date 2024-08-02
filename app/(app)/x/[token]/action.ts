"use server";
import { cancelBookingByTokenApi } from "@/api/booking";
import { IBooking } from "@/types/booking";
import { IError } from "@/types/error";
import { AxiosError } from "axios";

export async function cancelBookingAction(
  token: string,
  userAgent: string
): Promise<[IBooking | null, IError]> {
  try {
    const res = await cancelBookingByTokenApi(token, userAgent);
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
