import { useAuth } from "../../contexts/authContext"

export const Home = () => {
    const { user } = useAuth();
    return(
        <div>
            <h1>Bem vindo, {user?.name} - {user?.email}</h1>
        </div>
    )
}