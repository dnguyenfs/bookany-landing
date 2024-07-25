import z from "zod";

export const IUser = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  merchantIds: z.array(z.string()),
  sharedMerchantIds: z.array(z.string()),
  lastMerchantMerchantId: z.string(),
  lastStaffMerchantId: z.string(),
});

export type IUser = z.infer<typeof IUser>;
