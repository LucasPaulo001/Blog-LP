import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

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
  loading: boolean;
  token: string | null,
  isAuthenticated: boolean;
}

//Service de config da api
import { api } from "../services/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null)
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setToken(token);
      getUser();
    }
  }, [])

  //Função de login
  const login = async (email: string, password: string) => {
    try{
      setLoading(true);
      const res = await api.post("/api/users/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      await getUser();
    }
    catch(err){
      console.error(err)
    }
    finally{
      setLoading(false)
    }
  };

  //Função de registro
  const register = async (name: string, email: string, password: string) => {
    try{
      setLoading(true)
      const res = await api.post("/api/users/register", { name, email, password });
      console.log(res.data.msg);
      setLoading(false)
      navigate("/login");
    }
    catch(err){
      console.error(err)
    }
  }

  //Função para pegar dados do usuário
  const getUser = async () => {
    try{
      const res = await api.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setUser(res.data);
    }
    catch(err){
      console.error(err)
    }
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    loading,
    getUser,
    token,
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
