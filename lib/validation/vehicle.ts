import { z } from "zod";

export const createVehicleSchema = z.object({
  vehiclemodel:    z.string().min(1, { message: "Vehicle Model required" }),
  category:  z.string().min(1, { message: "Category required" }),
  platenumber:    z.string().min(1, { message: "Plate Number" }),
  location:  z.string().min(1, { message: "Location required" }),
  purchaseDate:  z.string().min(1, { message: "PurchaseDate required" }),
  purchaseCost:  z.string().min(1, { message: "PurchaseCost required" }),
  
  
});

export type CreateVehicleSchema = z.infer<typeof createVehicleSchema>;

export const updateVehicleSchema= createVehicleSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteVehicleSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});