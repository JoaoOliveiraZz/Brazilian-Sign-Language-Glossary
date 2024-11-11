// seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const data = [
    {
      name: 'Saudações',
      description: 'Categorias relacionadas a sinais de saudação, como olá, tchau, bom dia, etc.',
    },
    {
      name: 'Alfabeto',
      description: 'Categoria para sinais relacionados às letras do alfabeto em LIBRAS.',
    },
    {
      name: 'Números',
      description: 'Categoria que engloba sinais de números de zero a mil em LIBRAS.',
    },
    {
      name: 'Pronomes',
      description: 'Pronomes pessoais, possessivos e demonstrativos em LIBRAS.',
    },
    {
      name: 'Cores',
      description: 'Sinais para diversas cores como azul, vermelho, verde, etc.',
    },
  ];

  data.forEach(async (item) => {
    await prisma.category.create({
      data: item
    })
  })

}

seed()
  .then(() => {
    console.log("Categories seeded with success!");
  })
  .catch((e) => {
    console.error("Error seeding categories:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
