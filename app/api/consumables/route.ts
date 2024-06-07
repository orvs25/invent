import prisma from "@/lib/db/prisma";
import { createConsumablesSchema } from "@/lib/validation/consumables";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createConsumablesSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const {  name,  
        category,  
        status,  
        manufacturer, 
        itemNumber,  
        location,      
        purchaseDate, 
        purchaseCost, 
        quantity,   } = parseResult.data;
  
      const job = await prisma.consumables.create({
        data: {
            name,  
            category,  
            status,  
            manufacturer, 
            itemNumber,  
            location,      
            purchaseDate, 
            purchaseCost, 
            quantity,    
          
        },
      });
  
      return Response.json({ job }, { status: 201 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }