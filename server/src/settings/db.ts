import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbURL = process.env.DB_URI;

if(!dbURL){
    console.error("Variável de ambiente 'DB_URI' não definida!");
    process.exit(1);
}

export const dbConection = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURL);
    console.log("Conectado ao mongoose!");
  } catch (err) {
    console.log(`Erro: ${err}`);
    process.exit()
  }
};
