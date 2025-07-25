import jwt from "jsonwebtoken";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { IUser } from "../models/User";
dotenv.config();
const jwt_secret = process.env.JWT_SECRET;

//gerar token
const generateToken = (id: string) => {
  if (!jwt_secret) {
    console.error("Variável de ambiente 'JWT_SECRET' não definida.");
    return;
  }
  return jwt.sign({ id }, jwt_secret, { expiresIn: "7d" });
};

//registro
export const register = async (req: Request, res: Response) => {
    try{
        const { name, email, password } = req.body;

        const user = await User.findOne({ email })

        if(user){
            return res.status(422).json({
                error: "Usuário já existe!"
            });
        };

        const salt = await bcrypt.genSalt();
        const hashPass = await bcrypt.hash(password, salt);

        await User.create({
            name,
            email,
            password: hashPass
        });

        res.status(201).json({
            msg: "Cadastro realizado com sucesso!"
        });
    }   
    catch(err: any){
        res.status(500).json({
            error: "Erro interno do servidor!"
        });
        console.log(err);
    }
}


//Login
export const login = async (req: Request, res: Response) => {
    try{

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(422).json({
                error: "Usuário não encontrado!"
            });
        };

        if(!(await bcrypt.compare(password, user.password))){
            return res.status(422).json({
                error: "Senha incorreta!"
            });
        };

        const idString = (user._id as string).toString()

        return res.status(200).json({
            _id: user._id,
            token: generateToken(idString)
        })

    }
    catch(err: any){
        res.status(500).json({
            error: "Erro interno do servidor!"
        });
        console.log(err);
    }
}

interface CustomRequest extends Request {
  user?: any;
}

//Dados de usuário logado
export const profile = async (req: CustomRequest, res: Response) => {
    try{
        const user = req.user
        res.status(200).json(user)
    }
    catch(err: any){
        res.status(500).json({
            error: "Erro interno do servidor!"
        });
        console.log(err);
    }
}



