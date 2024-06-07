import prisma from "@/lib/db/prisma";
import { createFurnitureSchema } from "@/lib/validation/furniture";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createFurnitureSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { furnitureName,
        category,
        modelNo,
        manufacturer,
        location,
        purchaseDate,
        purchaseCost   } = parseResult.data;
  
      const job = await prisma.furniture.create({
        data: {
            furnitureName,
            category,
            modelNo,
            manufacturer,
            location,
            purchaseDate,
            purchaseCost,
          
        },
      });
  
      return Response.json({ job }, { status: 201 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }