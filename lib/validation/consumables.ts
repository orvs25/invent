import { z } from "zod";

export const createConsumablesSchema = z.object({
  name:    z.string().min(1, { message: "Name required" }),
  category:  z.string().min(1, { message: "Category required" }),
  status:    z.string().min(1, { message: "Status required" }),
  manufacturer:  z.string().min(1, { message: "Manufacturer required" }),
  itemNumber:    z.string().min(1, { message: "Item Number required" }),
  location:  z.string().min(1, { message: "Location required" }),
  purchaseDate:  z.string().min(1, { message: "PurchaseDate required" }),
  purchaseCost:  z.string().min(1, { message: "PurchaseCost required" }),
  quantity:  z.string().min(1, { message: "Quantity required" }),
});

export type CreateConsumablesSchema = z.infer<typeof createConsumablesSchema>;

export const updateConsumablesSchema = createConsumablesSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteConsumablesSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});