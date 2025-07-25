import { useState, type FormEvent } from "react"
import BasicButtons from "../../../components/Button/Button"
import BasicTextFields from "../../../components/Input/Input"
import { useAuth } from "../../../contexts/authContext";

export const Register = () => {
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { register, loading } = useAuth();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(nome, email, password);
    }



    return(
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="h-3/4 w-1/2 bg-silver rounded shadow-md flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit} 
                className="w-100 flex flex-col items-center justify-center gap-10">
                    <h1 className="font-bold text-4xl">Blog-LP</h1>
                    <div className="w-100 gap-5">
                        <div className="w-full">
                            <BasicTextFields 
                                fullWidth={true} 
                                label="Nome"
                                type="text" 
                                variant="standard" 
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <BasicTextFields 
                                fullWidth={true} 
                                label="E-mail" 
                                variant="standard" 
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}    
                            />
                        </div>
                        <div className="w-full">
                            <BasicTextFields 
                            
                                fullWidth={true} 
                                label="Senha" 
                                variant="standard" 
                                type={"password"}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <BasicButtons 
                        type={"submit"} 
                        text="Fazer cadastro" 
                        variant="contained" 
                        loading={loading ? true : false} 
                    />
                </form>
            </div>
        </div>
    )
}