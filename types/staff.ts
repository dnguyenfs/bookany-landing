import { z } from "zod";
import { IUser } from "./user";
import { IServiceStaffs } from "./service-staff";

export const IStaffState = z.enum([
  "all",
  "active",
  "inactive",
  "deleted",
  "pending",
  "ban",
]);

export type IStaffState = z.infer<typeof IStaffState>;

export const IStaff = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string().nullable(),
  description: z.string().nullable(),
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  enableOnlineBooking: z.boolean().default(false),
  enableInternal: z.boolean().default(false),
  commisionRate: z.number().default(0),
  idx: z.number().default(0),
  state: IStaffState.default("active"),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  serviceStaffs: z.array(IServiceStaffs),
});

export type IStaff = z.infer<typeof IStaff>;
