import { z } from "zod";
export const inventoryCreateDTOschema = z.object({
  productId: z.string(),
  sku: z.string(),
  quantity: z.number().positive().optional().default(0),
});

export type InventoryCreateDTO = z.infer<typeof inventoryCreateDTOschema>;