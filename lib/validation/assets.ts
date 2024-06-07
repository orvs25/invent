import { z } from "zod";

export const createAssetSchema = z.object({
  model:    z.string().min(1, { message: "Model required" }),
  status:    z.string().min(1, { message: "Status required" }),
  serial:    z.string().min(1, { message: "Serial required" }),
  category:  z.string().min(1, { message: "Category required" }),
});

export type CreateAssetSchema = z.infer<typeof createAssetSchema>;

export const updateAssetSchema = createAssetSchema.extend({
  id: z.string().min(1, { message: "Id required" }),
});

export const deleteAssetSchema = z.object({
  id: z.string().min(1, { message: "Id required" }),
});