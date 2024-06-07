import prisma from "@/lib/db/prisma";
import { createAppliancesSchema } from "@/lib/validation/appliances";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createAppliancesSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { name,
      category,
      location,
      purchaseDate,
      purchaseCost,  } = parseResult.data;
  
      const job = await prisma.appliances.create({
        data: {
            name,
            category,
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