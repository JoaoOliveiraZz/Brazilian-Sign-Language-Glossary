import express from "express"

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("Bem vindo ao nosso servidor :)");
})


app.listen(3100, () => console.log('Server is running on port ', 3100))