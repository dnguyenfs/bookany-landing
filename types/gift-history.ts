import { z } from "zod";
import { IUser } from "./user";

export const IGiftHistory = z.object({
  id: z.string(),
  amount: z.number(),
  type: z.enum(["created", "redeem", "topup", "sale", "void_sale", "other"]),
  giftId: z.string(),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type IGiftHistory = z.infer<typeof IGiftHistory>;
