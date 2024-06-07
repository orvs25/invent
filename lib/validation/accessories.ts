import { z } from "zod";

export const createAccessorySchema = z.object({
  name:    z.string().min(1, { message: "Name required" }),
  category :  z.string().min(1, { message: "Category required" }),
  status:    z.string().min(1, { message: "Status required" }),
  modelNo:    z.string().min(1, { message: "Model No. required" }),
  location:    z.string().min(1, { message: "location required" }),
  purchaseCost:  z.string().min(1, { message: "Purchase Cost required" }),
});

export type CreateAccessorySchema = z.infer<typeof createAccessorySchema>;

export const updateAccessorySchema = createAccessorySchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteAccessorySchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});