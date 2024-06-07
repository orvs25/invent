import prisma from "@/lib/db/prisma";
import { createAccessorySchema } from "@/lib/validation/accessories";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parseResult = createAccessorySchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name,
      category,
      status,
      modelNo,
      location,
      purchaseCost } = parseResult.data;

    const job = await prisma.accessory.create({
      data: {
        name,
        category,
        status,
        modelNo,
        location,
        purchaseCost
      },
    });

    return Response.json({ job }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
