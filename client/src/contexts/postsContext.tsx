import { createContext, useContext, useEffect, useState } from "react";

import type { ReactNode } from "react";

interface Post {
    title: string;
    content: string;
    tags: string[];
    slug: string;
}

interface PostsContextType {
    listPosts: () => void;
    posts: Post[] | null;
    loading: boolean;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

import { api } from "../services/api";

export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        listPosts();
    }, []);

    //Função para listar postagens
    const listPosts = async () => {
        try{
            setLoading(true);
            const res = await api.get("/api/posts/list/all/posts");
            setPosts(res.data)
            console.log(res.data);
        }
        catch(err){
            console.error(err);
        }
        finally{
            setLoading(false);
        }
    }

    const value: PostsContextType = {
        posts,
        loading,
        listPosts,
    }

    return(
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts deve ser usado dentro de um AuthProvider");
  }
  return context;
};


