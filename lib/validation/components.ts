import { z } from "zod";

export const createComponentSchema = z.object({
  name:    z.string().min(1, { message: "Name required" }),
  category:    z.string().min(1, { message: "Category required" }),
  quantity:    z.string().min(1, { message: "Quantity required" }),
  minQty:  z.string().min(1, { message: "Min Qty required" }),
  serial:    z.string().min(1, { message: "Serial required" }),
  company:    z.string().min(1, { message: "Company required" }),
  location:    z.string().min(1, { message: "Location required" }),
  orderNumber:  z.string().min(1, { message: "Order Number required" }),
  purchaseDate:  z.string().min(1, { message: "Purchase Date required" }),
});

export type CreateComponentSchema = z.infer<typeof createComponentSchema>;

export const updateComponentSchema = createComponentSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteComponentSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});