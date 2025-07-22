import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { useAuth } from "../../contexts/authContext"
import { useTheme } from "../../contexts/themeContext";

export const Home = () => {
    const { user } = useAuth();
    const { active } = useTheme();
    return(
        <div className={active ? "dark:bg-gray-800 px-6 py-8 text-white ring shadow-xl ring-gray-900/5" : ""}>
            <Navbar />
            <div className="h-screen">
                <h1>Bem vindo - {user?.name}</h1>
            </div>
            <Footer />
        </div>
    )
}