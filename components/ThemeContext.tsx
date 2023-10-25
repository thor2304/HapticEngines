import {lightTheme} from "./Themes";
import React, { createContext, useState } from "react";
import { Theme } from "./Themes";

export const ThemeContext = createContext({ theme: lightTheme, setTheme: (theme: Theme) => {} });

/**
 * This is the provider for the ThemeContext. It is used in App.tsx
 * @param children This ensures that everything wrapped in the ThemeContextProvider has access to the theme.
 * @constructor
 */
export function ThemeContextProvider({ children } : { children: React.ReactNode }) {
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

