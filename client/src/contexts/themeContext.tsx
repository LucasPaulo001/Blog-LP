import { useState, createContext, useContext } from "react";

import type { Dispatch, ReactNode, SetStateAction } from "react";

interface ThemeContextType {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    showActive: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [active, setActive] = useState<boolean>(false);

    const showActive = () => {
        setActive((prev) => !prev);
    }


    const value: ThemeContextType = {
        active,
        showActive,
        setActive
    }

    return(
        <ThemeContext value={value}>
            {children}
        </ThemeContext>
    )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um ThemeProvider");
  }
  return context;
};


