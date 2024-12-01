import fastify, { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma_instance";
import { z } from "zod";


export async function CategoryRoutes(app: FastifyInstance){

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

}
