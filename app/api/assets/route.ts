import prisma from "@/lib/db/prisma";
import { createAssetSchema } from "@/lib/validation/assets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parseResult = createAssetSchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { model, status, serial, category } = parseResult.data;

    const job = await prisma.assets.create({
      data: {
        model,
        status,
        serial,
        category,
      },
    });

    return Response.json({ job }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
