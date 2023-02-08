import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function fetchProducts() {
  try {
    const data = await prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        AND: [
          {
            Manufacturer: {
              path: "manufacturerID",
              equals: '417',
            },
          },
          {
            Category: {
              not: false,
            },
          },
          {
            Images: {
              not: false,
            },
          },
        ],
      },
    });
    prisma.$disconnect
    return data
  } catch (error) {
    console.error(error, brand);
  }
}