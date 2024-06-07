import prisma from "@/lib/db/prisma";

export default async function CountAssets() {
    const data = await prisma.assets.findMany();
  
    const assetCount = data.length;
  
    return (
      <div>
        <p>{assetCount}</p>
      </div>
    );
  }