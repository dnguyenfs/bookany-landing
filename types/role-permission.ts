import { z } from "zod";

export const IRolePermission = z.object({
  id: z.string(),
  roleId: z.string(),
  permissionId: z.string(),
  merchantId: z.string(),
  enabled: z.boolean(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export type IRolePermission = z.infer<typeof IRolePermission>;
