import { useAuth } from "../../contexts/authContext"

export const Home = () => {
    const { user } = useAuth();
    
    return(
        <div>
            <div className="h-screen">
                <h1>Bem vindo - {user?.name}</h1>
            </div>
        </div>
    )
}