import { z } from "zod";
import { IMerchant } from "./merchant";
import { IClient } from "./client";
import { IBookingService } from "./booking-service";
import { ISale } from "./sale";

export const IBookingStates = z.enum([
  "confirmed",
  "unconfirm",
  "waiting",
  "serving",
  "done",
  "canceled",
  "noshow",
  "pending",
]);

export type IBookingStates = z.infer<typeof IBookingStates>;
export type INewBookingStates = IBookingStates | "undoNoShow";

export const IBookingTypes = z.enum([
  "offline",
  "online",
  "no_preference",
  "block",
]);

export type IBookingTypes = z.infer<typeof IBookingTypes>;

export const IBooking = z.object({
  id: z.string(),
  name: z.string(),
  date: z.union([z.date(), z.string()]),
  time: z.string().optional(),
  datetime: z.union([z.date(), z.string()]).optional(),
  state: IBookingStates,
  acceptedTerm: z.boolean().default(false).optional(),
  remind: z.boolean().default(false).optional(),
  hasReview: z.boolean().default(false).optional(),
  note: z.string().optional().optional(),
  type: IBookingTypes,
  paid: z.boolean().default(false).optional(),
  clientId: z.string().optional(),
  merchantId: z.string().optional(),
  createdAt: z.union([z.date(), z.string()]).optional(),
  updatedAt: z.union([z.date(), z.string()]).optional(),
  createdUserId: z.string().optional(),
  updatedUserId: z.string().optional(),
  merchant: IMerchant.optional(),
  client: IClient.optional(),
  bookingServices: z.array(IBookingService),
  beginAt: z.number(),
  sales: z.array(ISale).optional(),
});

export type IBooking = z.infer<typeof IBooking>;
