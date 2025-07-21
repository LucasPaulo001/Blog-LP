import { Post } from "../models/Post";
import { Request, Response } from "express";

interface customRequest extends Request {
  user?: any;
}

//Criação de slug
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-"); 
}


//Criação de postagem
export const createPost = async (req: customRequest, res: Response) => {
  try {
    const { title, author, content, tags } = req.body;
    const userId = req.user;

    const post = await Post.create({
      title,
      content,
      author: userId._id,
      slug: generateSlug(title),
      tags,
    });

    res.status(201).json({
      msg: "Postagem criada com sucesso!",
      post: post,
    });
  } catch (err: any) {
    res.status(500).json({
      error: "Erro interno do servidor!",
    });
    console.log(err);
  }
};

//Listando todos os posts
export const findAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (err: any) {
    res.status(500).json({
      error: "Erro interno do servidor!",
    });
    console.log(err);
  }
};

//Acessando um post
export const accessPost = async (req: Request, res: Response) => {
  try {

    const slug = req.params.slug;

    const post = await Post.findOne({ slug });

    if(!post){
        return res.status(404).json({
            error: "Postagem não encontrada!"
        });
    };

    res.status(200).json(post)


  } catch (err: any) {
    res.status(500).json({
      error: "Erro interno do servidor!",
    });
    console.log(err);
  }
};
