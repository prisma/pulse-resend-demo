import { PrismaClient } from '@prisma/client'
import { withPulse } from '@prisma/extension-pulse'

const x = new PrismaClient().$extends(withPulse({ apiKey: "apiKey" }));
const prisma = new PrismaClient();

async function main() {
  await x.user.findMany()
  await prisma.user.findMany()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
