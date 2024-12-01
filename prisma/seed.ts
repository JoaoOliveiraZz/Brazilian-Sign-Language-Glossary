// seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {

  prisma.category.deleteMany();
  prisma.signal.deleteMany();

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

  const signals = [
    {
      name: "Amarelo",
      description: "Como sinalizar a cor amarela",
      source: "testing",
      CategoryId: "97eac0a1-b004-4362-ab6d-a1df2e806805"
    },
    {
      name: "Vermelho",
      description: "Como sinalizar a cor Vermelha",
      source: "testing",
      CategoryId: "97eac0a1-b004-4362-ab6d-a1df2e806805"
    },
    {
      name: "Branco",
      description: "Como sinalizar a cor Branca",
      source: "testing",
      CategoryId: "97eac0a1-b004-4362-ab6d-a1df2e806805"
    },
    {
      name: "Azul",
      description: "Como sinalizar a cor Azul",
      source: "testing",
      CategoryId: "97eac0a1-b004-4362-ab6d-a1df2e806805"
    },
  ]

  data.forEach(async (item) => {
    await prisma.category.create({
      data: item
    })
  })
  signals.forEach(async (item) => {
    await prisma.signal.create({
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
