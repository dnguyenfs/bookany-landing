import axios from "@/lib/axios";
import { IBooking } from "@/types/booking";
import { cookies } from "next/headers";

type IBookingWithAuthProps = {
  staffId: string | null;
  serviceIds: string[];
  beginAt: number;
  date: string;
  note: string;
};

type IBookingWithoutAuthProps = IBookingWithAuthProps & {
  client: {
    name: string;
    phone: string;
    email: string;
  };
};

export type ICreateBookingWithoutAuthProps = {
  slug: string;
  userAgent: string;
  body: IBookingWithoutAuthProps;
};

export async function createBookingWithoutAuthApi({
  slug,
  userAgent,
  body,
}: ICreateBookingWithoutAuthProps): Promise<IBooking> {
  const res = await axios.post(`/online/${slug}/booking`, body, {
    headers: {
      "User-Agent": userAgent,
    },
  });
  return res.data;
}

export type ICreateBookingWithAuthProps = {
  slug: string;
  userAgent: string;
  body: IBookingWithAuthProps;
};

export async function createBookingWithAuthApi({
  slug,
  userAgent,
  body,
}: ICreateBookingWithAuthProps): Promise<IBooking> {
  const cookieStore = cookies();
  const authentication = cookieStore.get("authentication");

  const res = await axios.post(`/online/${slug}/auth-booking`, body, {
    headers: {
      "User-Agent": userAgent,
      Cookie: `authentication=${authentication?.value};`,
    },
  });
  return res.data;
}
