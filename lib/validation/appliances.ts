import { z } from "zod";

export const createAppliancesSchema = z.object({
  name:    z.string().min(1, { message: "Name required" }),
  category:    z.string().min(1, { message: "Category required" }),
  location:    z.string().min(1, { message: "location required" }),
  purchaseDate:  z.string().min(1, { message: "Purchase Date required" }),
  purchaseCost:  z.string().min(1, { message: "Purchase Cost required" }),
});

export type CreateAppliancesSchema = z.infer<typeof createAppliancesSchema>;

export const updateAppliancesSchema = createAppliancesSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteAppliancesSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});