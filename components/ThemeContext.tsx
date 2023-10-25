import {lightTheme} from "./Themes";
import { createContext, useState } from "react";
import { Theme } from "./Themes";

export const ThemeContext = createContext({ theme: lightTheme, setTheme: (theme: Theme) => {} });

export const ThemeContextProvider = ({ children } : any) => {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

