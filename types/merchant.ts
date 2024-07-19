import { z } from "zod";
import { IRoleTypes } from "./role";

export const IMerchantTypes = z.enum([
  "salon",
  "coffee",
  "restaurant",
  "bar",
  "hotel",
  "other",
]);

export type IMerchantTypes = z.infer<typeof IMerchantTypes>;

export type IMerchantTypeOption = {
  value: IMerchantTypes;
  label: string;
  icon: React.ReactNode;
};

const fileFolderSubname = z.enum(["logo", "cover", "photos", "other"]);

const file = z.object({
  id: z.string(),
  primary: z.boolean(),
  key: z.string(),
  folderId: z.string(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

const fileFolder = z.object({
  id: z.string(),
  name: z.string(),
  subName: fileFolderSubname,
  description: z.string().nullable(),
  type: IRoleTypes,
  merchantId: z.string(),
  files: z.array(file),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
});

export const IMerchant = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  email: z.string().email(),
  phone: z.string(),
  slug: z.string(),
  logoUrl: z.string().nullable(),
  coverUrl: z.string().nullable(),
  address: z.string(),
  geometry: z.any(),
  timezone: z.string(),
  countryCode: z.string(),
  currency: z.string(),
  placeId: z.string(),
  referalCode: z.string(),
  code: z.string(),
  bussinessType: IMerchantTypes,
  state: z.enum([
    "initialize",
    "active",
    "inactive",
    "pending",
    "delete",
    "ban",
  ]),
  verifired: z.boolean(),
  createdAt: z.union([z.date(), z.string()]),
  updatedAt: z.union([z.date(), z.string()]),
  createdUserId: z.string(),
  updatedUserId: z.string(),
  settings: z.object({
    enableOnlineBooking: z.boolean(),
    requiredAuthenticated: z.boolean(),
    taxRate: z.number(),
    cashDiscountPercent: z.number(),
    slotInterval: z.number(),
    internal: z.object({
      allowCreateNewOrder: z.boolean(),
      onlyDisplayHeartService: z.boolean(),
    }),
    hexColor: z.string(),
  }),
  fileFolders: z.array(fileFolder),
});

export type IMerchant = z.infer<typeof IMerchant>;
