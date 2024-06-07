import prisma from "@/lib/db/prisma";
import { createLicenseSchema } from "@/lib/validation/license";

export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const parseResult = createLicenseSchema.safeParse(body);
  
      if (!parseResult.success) {
        console.error(parseResult.error);
        return Response.json({ error: "Invalid input" }, { status: 400 });
      }
  
      const {  softwareName,
        category,   
        productKey,  
        manufacturer, 
        licensedto_name, 
        licensedto_email, 
        purchaseDate,
        purchaseCost, 
        expirationDate,    } = parseResult.data;
  
      const job = await prisma.license.create({
        data: {softwareName,
            category,   
            productKey,  
            manufacturer, 
            licensedto_name, 
            licensedto_email, 
            purchaseDate,
            purchaseCost, 
            expirationDate, 
               
          
        },
      });
  
      return Response.json({ job }, { status: 201 });
    } catch (error) {
      console.error(error);
      return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }