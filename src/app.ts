import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import {z} from 'zod'
import cors from "@fastify/cors"
import { prisma } from "./utils/prisma_instance";
import { CategoryRoutes } from "./routes/categories";
import { SignalRoutes } from "./routes/signals";

const app = fastify();


app.register(cors, {
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Permite todos os métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite cabeçalhos específicos
});

app.register(CategoryRoutes);
app.register(SignalRoutes);



app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}, () => {
    console.log('HTTP server running')
})