import prisma from "@/lib/db/prisma";
import { createVehicleSchema } from "@/lib/validation/vehicle";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createVehicleSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const { 
        vehiclemodel,
        category,
        platenumber,
        location,
        purchaseDate,
        purchaseCost,
          } = parseResult.data;
  
      const job = await prisma.vehicle.create({
        data: {
        vehiclemodel,
        category,
        platenumber,
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