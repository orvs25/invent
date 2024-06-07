import { z } from "zod";

export const createLicenseSchema = z.object({
  softwareName:    z.string().min(1, { message: "Software Name required" }),
  category:  z.string().min(1, { message: "Category required" }),
  productKey:    z.string().min(1, { message: "Product Key required" }),
  manufacturer:  z.string().min(1, { message: "Manufacturer required" }),
  licensedto_name:    z.string().min(1, { message: "Licensed to name required" }),
  licensedto_email:  z.string().min(1, { message: "Licensed to email required" }),
  purchaseDate:  z.string().min(1, { message: "PurchaseDate required" }),
  purchaseCost:  z.string().min(1, { message: "PurchaseCost required" }),
  expirationDate:  z.string().min(1, { message: "Quantity required" }),
  
});

export type CreateLicenseSchema = z.infer<typeof createLicenseSchema>;

export const updateLicenseSchema= createLicenseSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteLicenseSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});