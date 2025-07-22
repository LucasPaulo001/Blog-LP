import { RxMoon } from "react-icons/rx";
import { RiSunFoggyFill } from "react-icons/ri";
import { useTheme } from "../../contexts/themeContext";
import { useEffect } from "react";


export const Navbar = () => {
    const { active, showActive } = useTheme();

    useEffect(() => {
        console.log(active)
    }, [active])

  return (
    <nav className="w-full p-5! shadow-md flex items-center flex-row place-content-between">
      <div>
        <h1 className="text-2xl">
          Lucas Paulo <span className="text-cyan-700 font-bold">Dev</span>
        </h1>
      </div>
      <div>
        <ul className="flex flex-row gap-10">
          <li>Início</li>
          <li>Sobre</li>
          <li>Posts</li>
          <button className="cursor-pointer" onClick={showActive}>
            {
                active ? (
                    <RiSunFoggyFill className="text-4xl text-yellow-600" />
                ) : (
                    <RxMoon className="text-4xl" />
                )
            }
          </button>
        </ul>
      </div>
    </nav>
  );
};
