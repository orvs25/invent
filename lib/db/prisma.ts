import { PrismaClient } from "@prisma/client";
export async function getStaticProps() {
    const prisma = new PrismaClient()
  
    return {
      props : { }
    }
  }
const prisma = new PrismaClient();

export default prisma;