import {
  createContext,
  useContext,
  useState,
} from "react";

import type { ReactNode } from "react";

// Tipagem do usuário
interface User {
  id: string;
  name: string;
  email: string;
}

// Tipagem do contexto
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
  getUser: () => void;
  isAuthenticated: boolean;
}

//Service de config da api
import { api } from "../services/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  //Função de login
  const login = async (email: string, password: string) => {
    try{
      const res = await api.post("/api/users/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      await getUser();
    }
    catch(err){
      console.error(err)
    }
  };

  //Função de registro
  const register = async (name: string, email: string, password: string) => {
    try{
      const res = await api.post("/api/users/register", { name, email, password });
      console.log(res.data.msg)
    }
    catch(err){
      console.error(err)
    }
  }

  //Função para pegar dados do usuário
  const getUser = async () => {
    try{
      const res = await api.get("/api/users/profile");
      const { user } = res.data;
      setUser(user);
    }
    catch(err){
      console.error(err)
    }
  }

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    getUser,
    isAuthenticated: !! user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook para consumir o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
