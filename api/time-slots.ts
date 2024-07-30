import axios from "@/lib/axios";

export type IGetTimeSlotProps = {
  slug: string;
  userAgent: string;
  staffId: string | null;
  serviceIds: string[];
  startDate: string;
  endDate: string;
};

export type ITimeSlotRes = Record<
  string,
  {
    closedReason: string;
    isClosed: boolean;
    slots: { beginAt: number }[];
  }
>;

export async function getTimeSlotsApi({
  slug,
  userAgent,
  ...rest
}: IGetTimeSlotProps): Promise<ITimeSlotRes> {
  const res = await axios.post(`/online/${slug}/available-slots`, rest, {
    headers: {
      "User-Agent": userAgent,
    },
  });
  return res.data;
}
