import { prisma } from "@/prisma";
import { inventoryCreateDTOschema } from "@/schemas";
import { ApiError } from "@/utils/apiError";
import { asyncHandler } from "@/utils/asyncHandler";
import { Request, Response, NextFunction } from "express";

export const createInventory = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      // Validate request body
      const parsedBody = inventoryCreateDTOschema.safeParse(req.body);
      if (!parsedBody.success) {
        return res.status(400).json({ error: parsedBody.error.errors });
      }

      // create inventory
      const inventory = await prisma.inventory.create({
        data: {
          ...parsedBody.data,
          histories: {
            create: {
              actionType: "IN",
              quantityChanged: parsedBody.data.quantity,
              lastQuantity: 0,
              newQuantity: parsedBody.data.quantity,
            },
          },
        },
        //only return the id quantity
        select: {
          id: true,
          quantity: true,
        },
      });

      return res.status(201).json(inventory);
    } catch (error) {
      console.log(error);
      throw new ApiError(404, "Inventory Error");
    }
  }
);
