import jwt from "jsonwebtoken";
import { User } from "../models/User";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
dotenv.config();
const jwt_secret = process.env.JWT_SECRET;

interface CustomRequest extends Request {
  user?: any;
}

//Função de autorização via token do usuário
export const authGuard = async (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeaders = req.headers["authorization"];

  const token = authHeaders && authHeaders.split(" ")[1];

  if (!token) {
    return res.status(422).json({
      error: "Acesso negado!",
    });
  }

  if (!jwt_secret) {
    console.error("Variável de ambiente 'JWT_SECRET' não definida.");
    return;
  }

  try {
    const verify = jwt.verify(token, jwt_secret) as { id: string };
    const user = await User.findById(verify.id).select("-password")

    if(!user){
        return res.status(422).json({
            error: "Usuário não encontrado!"
        });
    };

    req.user = user;

    return next();
  } catch (err) {
    res.status(422).json({
      error: "Token inválido ou expirado!",
    });
  }
};
