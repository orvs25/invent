import { z } from "zod";

export const createFurnitureSchema = z.object({
  furnitureName:    z.string().min(1, { message: "Furniture Name required" }),
  category:  z.string().min(1, { message: "Category required" }),
  modelNo:    z.string().min(1, { message: "Model No required" }),
  manufacturer:  z.string().min(1, { message: "Manufacturer required" }),
  location:  z.string().min(1, { message: "Location required" }),
  purchaseDate:  z.string().min(1, { message: "PurchaseDate required" }),
  purchaseCost:  z.string().min(1, { message: "PurchaseCost required" }),
});

export type CreateFurnitureSchema = z.infer<typeof createFurnitureSchema>;

export const updateFurnitureSchema = createFurnitureSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteFurnitureSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});