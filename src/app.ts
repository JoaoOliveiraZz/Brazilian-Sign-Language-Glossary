import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import {z} from 'zod'
import cors from "@fastify/cors"

const app = fastify();

const prisma = new PrismaClient();

app.register(cors, {
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite todos os métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite cabeçalhos específicos
});

app.get("/category", async () => {
    const categories = await prisma.category.findMany();
    return categories;
})

app.post("/category", async (request, reply) => {

    const createCategorySchema = z.object({
        name: z.string(),
        description: z.string()
    });

    const {name, description} = createCategorySchema.parse(request.body);

    await prisma.category.create({
        data: {
            name: name,
            description: description
        }
    })

    return reply.status(201).send();

})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}, () => {
    console.log('HTTP server running')
})