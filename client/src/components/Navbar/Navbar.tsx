import { RxMoon } from "react-icons/rx";
import { RiSunFoggyFill } from "react-icons/ri";
import { useTheme } from "../../contexts/themeContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import BasicButtons from "../Button/Button";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { MenuMob } from "../MenuMob/MenuMob";

export const Navbar = () => {
  const { active, showActive } = useTheme();
  const { token, logout, loading } = useAuth();
  const [showMenuMob, setShowMenuMob] = useState<boolean>(false);

  return (
    <nav className="w-full p-5! shadow-md flex items-center flex-row place-content-between">
      <div>
        <h1 className="text-2xl">
          <Link to={"/"}>
            Lucas Paulo <span className="text-cyan-700 font-bold">Dev</span>
          </Link>
        </h1>
      </div>
      {/* Menu amburguer */}
      <button
        className="md:hidden text-3xl cursor-pointer"
        onClick={() => setShowMenuMob(true)}
      >
        <CiMenuBurger />
      </button>

      {/* Menu mobile */}
      {<MenuMob setShowMenuMob={setShowMenuMob} showMenuMob={showMenuMob} />}

      {/* Nav com os links */}
      <div className="hidden md:flex">
        <ul className="flex flex-row items-center gap-10">
          <li>
            <Link to={"/"}>Início</Link>
          </li>
          <li>
            <Link to={"/about"}>Sobre</Link>
          </li>
          {token && (
            <>
              <li>
                <Link to={"/create-post"}>Criar Postagem</Link>
              </li>
              <BasicButtons
                text="Sair"
                loading={loading ? true : false}
                type={"button"}
                variant={"text"}
                onClick={logout}
              />
            </>
          ) }
          <button className="cursor-pointer" onClick={showActive}>
            {active ? (
              <RiSunFoggyFill className="text-4xl text-yellow-600" />
            ) : (
              <RxMoon className="text-4xl" />
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
};
