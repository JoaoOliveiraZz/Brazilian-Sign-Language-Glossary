import fastify from "fastify";

const app = fastify();

app.get("/", () => {
    return "Bem vindo ao nosso servidor!"
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}, () => {
    console.log('HTTP server running')
})