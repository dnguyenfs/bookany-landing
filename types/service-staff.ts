import { z } from "zod";
import { IUser } from "./user";

export const IServiceStaffs = z.object({
  id: z.string(),
  merchantId: z.string(),
  staffId: z.string(),
  serviceId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type IServiceStaffs = z.infer<typeof IServiceStaffs>;
