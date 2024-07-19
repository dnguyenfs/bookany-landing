import { z } from "zod";
import { IRolePermission } from "./role-permission";

export const IRoleTypes = z.enum(["system", "customed"]);

export type IRoleTypes = z.infer<typeof IRoleTypes>;

export const IRole = z.object({
  id: z.string(),
  name: z.string(),
  type: IRoleTypes,
  merchantId: z.string(),
  rolePermissions: z.array(IRolePermission).optional(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type IRole = z.infer<typeof IRole>;
