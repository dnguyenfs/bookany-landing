import { z } from "zod";
import { IUser } from "./user";

export const ISaleTip = z.object({
  id: z.string(),
  amount: z.number(),
  saleId: z.string(),
  staffId: z.string().nullable(),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type ISaleTip = z.infer<typeof ISaleTip>;
