import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//Banco de dados
import { dbConection } from "./settings/db";

//Iniciando o servidor
const PORT = process.env.PORT;
app.listen(PORT, async () => {
    await dbConection()
    console.log(`Conectado ao servidor na porta: ${PORT}`);
});