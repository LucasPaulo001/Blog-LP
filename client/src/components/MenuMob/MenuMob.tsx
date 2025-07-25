import type { Dispatch, SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiSunFoggyFill } from "react-icons/ri";
import { RxMoon } from "react-icons/rx";
import { Link } from "react-router-dom";
import BasicButtons from "../Button/Button";
import { useAuth } from "../../contexts/authContext";
import { useTheme } from "../../contexts/themeContext";


interface menuMob {
  showMenuMob: boolean;
  setShowMenuMob: Dispatch<SetStateAction<boolean>>;
}

export const MenuMob = ({ showMenuMob, setShowMenuMob }: menuMob) => {
    const { token, loading, logout } = useAuth();
    const { active, showActive } = useTheme();


  return (
    <>
      {showMenuMob && (
        <div className="fixed top-0 left-0 z-40 w-full h-screen bg-white dark:bg-slate-800 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button className="text-3xl text-red-500" onClick={() => setShowMenuMob(false)}>
              <IoCloseOutline />
            </button>
          </div>
          <ul className="flex flex-col gap-6 mt-10 text-lg items-center mt-10!">
            <li className="border-b py-4 text-center w-full hover:bg-slate-100 dark:hover:bg-slate-700 transition">
              <Link to="/" onClick={() => setShowMenuMob(false)}>Início</Link>
            </li>
            <li className="border-b py-4 text-center w-full hover:bg-slate-100 dark:hover:bg-slate-700 transition">
              <Link to="/about" onClick={() => setShowMenuMob(false)}>Sobre</Link>
            </li>
            {token && (
              <>
                <li className="border-b py-4 text-center w-full hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                  <Link to="/create-post" onClick={() => setShowMenuMob(false)}>
                    Criar Postagem
                  </Link>
                </li>
                <li>
                  <BasicButtons
                  color="error"
                    text="Sair"
                    loading={loading}
                    type="button"
                    variant="text"
                    onClick={() => {
                      logout();
                      setShowMenuMob(false);
                    }}
                  />
                </li>
              </>
            )}
            <li>
              <button className="cursor-pointer" onClick={showActive}>
                {active ? (
                  <RiSunFoggyFill className="text-4xl text-yellow-600" />
                ) : (
                  <RxMoon className="text-4xl" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
