import { z } from "zod";
import { IServiceStaffs } from "./service-staff";

export const IServiceStates = z.enum([
  "active",
  "inactive",
  "deleted",
  "pending",
  "ban",
]);

export type IServiceStates = z.infer<typeof IServiceStates>;

export const IService = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  enableOnlineBooking: z.boolean().default(false),
  imageKey: z.string().nullable(),
  price: z.number().default(0),
  duration: z.number().default(5),
  depositRate: z.number().default(0),
  sub: z.boolean().default(false),
  parentId: z.string().nullable(),
  merchantId: z.string(),
  categoryId: z.string(),
  idx: z.number().default(0),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  serviceStaffs: z.array(IServiceStaffs),
  state: IServiceStates,
});

export type IService = z.infer<typeof IService>;
