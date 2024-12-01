import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma_instance";
import { z } from "zod";

export async function SignalRoutes(app: FastifyInstance){

    app.get('/signals', async () => {

        const allSignals = await prisma.signal.findMany();

        return allSignals;

    })

    app.get('/signals/:categoryId', async (request, reply) => {

        const requestParams = z.object({
            categoryId: z.string()
        })
        

        const { categoryId } = requestParams.parse(request.params);;

        const allSignals = await prisma.signal.findMany(
            {
                where: {
                    CategoryId: categoryId
                }
            }
        );

        return allSignals;

    })

    app.post('/signal', async (request, reply) => {

        const createSignalSchema = z.object({
            name: z.string(),
            description: z.string(),
            source: z.string(),
            CategoryId: z.string()
        })

        const { name, description, source, CategoryId } = createSignalSchema.parse(request.body);

            await prisma.signal.create({
                data: {
                    name,
                    description,
                    source,
                    CategoryId
                }
            })

        return reply.status(201).send(); 

    })

}