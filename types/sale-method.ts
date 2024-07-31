import { z } from "zod";
import { IUser } from "./user";

export const ISaleMethod = z.object({
  id: z.string(),
  amount: z.number(),
  specialDiscount: z.number(),
  type: z.enum(["cash", "card", "gift", "point"]),
  saleId: z.string(),
  giftId: z.string().nullable(),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type ISaleMethod = z.infer<typeof ISaleMethod>;
