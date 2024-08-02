import { z } from "zod";
import { IBooking } from "./booking";
import { IService } from "./service";

export const BookingServiceStates = z.enum([
  "confirmed",
  "unconfirm",
  "waiting",
  "serving",
  "done",
  "canceled",
  "noshow",
  "pending",
]);

export const IBookingService = z.object({
  id: z.string(),
  duration: z.number().optional(),
  price: z.number().default(0).optional(),
  state: BookingServiceStates.optional(),
  beginAt: z.number(),
  love: z.boolean().default(false),
  serviceId: z.string(),
  staffId: z.string(),
  bookingId: z.string(),
  merchantId: z.string().optional(),
  service: IService.optional(),
  createdAt: z.union([z.date(), z.string()]).optional(),
  updatedAt: z.union([z.date(), z.string()]).optional(),
  createdUserId: z.string().optional(),
  updatedUserId: z.string().optional(),
});

export type IBookingService = z.infer<typeof IBookingService> & {
  booking: Partial<IBooking>;
};
