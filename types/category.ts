import { z } from "zod";
import { IService } from "./service";

export const ICategory = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  color: z.string().optional(),
  idx: z.number().default(0),
  merchantId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  services: z.array(IService),
});

export type ICategory = z.infer<typeof ICategory>;
