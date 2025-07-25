import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

interface Author {
  name: string;
  email: string;
}

interface Post {
  _id: string;
  title: string;
  author: Author;
  content: string;
  tags: string[];
  slug: string;
  banner: string;
}

interface PostsContextType {
  listPosts: () => void;
  postDetails: (slug: string) => void;
  createPost: (title: string, content: string, banner: string, tags: string[]) => void;
  posts: Post[] | null;
  loading: boolean;
  details: Post | null;
  deletePost: (postId: string) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

import { api } from "../services/api";

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [details, setDetails] = useState<Post | null>(null);

  useEffect(() => {
    listPosts();
  }, []);

  useEffect(() => {
    return () => setDetails(null);
  }, []);

  //Criar postagem
  const createPost = async (title: string, content: string, banner: string, tags: string[]) => {
    try{
      setLoading(true)
      const res = await api.post("/api/posts/create/post", { title, content, banner, tags }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setPosts((prev) => prev ? [...prev, res.data] : [res.data]);
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }

  //Função para listar postagens
  const listPosts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/posts/list/all/posts");
      setPosts(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  //Função para exibir conteúdo da postagem
  const postDetails = async (slug: string) => {
    try {
      setLoading(true);
      const res = await api.get(`/api/posts/list/post/${slug}`);
      setDetails(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //Função para excluir postagens
  const deletePost = async (postId: string) => {
    try{
      setLoading(true)
      const res = await api.delete(`/api/posts/delete/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setPosts((prev) => prev ? prev?.filter((p) => p._id !== postId) : null);
      console.log(res.data)
    } 
    catch(err){
      console.error(err)
    }
    finally{
      setLoading(false)
    }
  }

  const value: PostsContextType = {
    posts,
    loading,
    details,
    listPosts,
    postDetails,
    createPost,
    deletePost
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts deve ser usado dentro de um AuthProvider");
  }
  return context;
};
