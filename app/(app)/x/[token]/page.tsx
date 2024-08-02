import { Metadata, ResolvingMetadata } from "next";
import { getBookingByTokenApi } from "@/api/booking";
import Booking from "./booking";

type Props = {
  params: { token: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const booking = await getBookingByTokenApi(params.token);

  return {
    title: `Bookany | Booking for ${booking.client?.name}`,
    description:
      "Client can view their booking details, and manage their appointments",
  };
}

export default async function BookingPage({ params }: Props) {
  const [booking] = await Promise.all([getBookingByTokenApi(params.token)]);

  return <Booking booking={booking} />;
}
