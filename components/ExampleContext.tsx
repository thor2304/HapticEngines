import React, {createContext} from "react";
import {darkTheme, Theme,} from "./Themes";



export interface ThemeContextType {
    theme: Theme;
    setState: React.Dispatch<React.SetStateAction<Theme>>;
}

export const exampleContext = createContext<ThemeContextType>({
    theme: darkTheme,
    setState: () => {
    }
})
