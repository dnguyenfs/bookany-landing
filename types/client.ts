import { z } from "zod";
import { IUser } from "./user";

export const ITeamState = z.enum([
  "active",
  "inactive",
  "deleted",
  "pending",
  "ban",
]);

export const IClient = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string().nullable(),
  description: z.string().nullable(),
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  imageKey: z.string().nullable(),
  blocked: z.boolean().default(false),
  blockedReason: z.string().nullable(),
  lastAppointment: z.union([z.date(), z.string()]).nullable(),
  noShow: z.number().default(0),
  dateOfBirth: z.union([z.date(), z.string()]).nullable(),
  state: ITeamState.default("active"),
  merchantId: z.string(),

  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUser: IUser.optional(),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type IClient = z.infer<typeof IClient>;

export type IClientBooking = Partial<IClient> & { beginAt: number };
