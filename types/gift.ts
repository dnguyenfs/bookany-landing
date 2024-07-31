import { z } from "zod";
import { IUser } from "./user";
import { IGiftHistory } from "./gift-history";
import { ISale } from "./sale";
import { IClient } from "./client";

export const GiftTypes = z.enum(["offline", "online", "point"]);
export type GiftTypes = z.infer<typeof GiftTypes>;

export const IGift = z.object({
  id: z.string(),
  title: z.string().optional(),
  note: z.string().optional(),
  amount: z.number(),
  code: z.string(),
  type: GiftTypes,
  state: z.enum(["active", "inactive", "deleted", "pending", "ban"]),
  clientId: z.string().nullable(),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  histories: z.array(IGiftHistory).optional(),
  sales: z.array(ISale).optional(),
  client: IClient.nullable(),
});

export type IGift = z.infer<typeof IGift>;
