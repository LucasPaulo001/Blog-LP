import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Banco de dados
import { dbConection } from "./settings/db";

//Rotas
import router from "./routes/routes";
app.use(router)

//Iniciando o servidor
const PORT = process.env.PORT;
app.listen(PORT, async () => {
    await dbConection()
    console.log(`Conectado ao servidor na porta: ${PORT}`);
});