import { z } from "zod";
import { IUser } from "./user";
import { ISaleMethod } from "./sale-method";
import { ISaleTip } from "./sale-tip";
import { IGift } from "./gift";
import { IBooking } from "./booking";

export const ISale = z.object({
  id: z.string(),
  clientId: z.string().nullable(),
  discountPercent: z.number().default(0),
  grossSale: z.number(),
  bookingId: z.string().nullable(),
  giftId: z.string().nullable(),
  taxRate: z.number().default(0),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  methods: z.array(ISaleMethod).nullable().optional(),
  tips: z.array(ISaleTip).nullable().optional(),
});

export type ISale = z.infer<typeof ISale> & {
  gift?: IGift;
  booking?: IBooking;
};
