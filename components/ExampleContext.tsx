import {Appearance, ColorValue} from "react-native";
import React, {createContext} from "react";

export interface Theme {
    textColor: ColorValue;
    backgroundColor: ColorValue;
}

const lightTheme: Theme = {
    textColor: "#000000",
    backgroundColor: "#ffffff"
}

const darkTheme: Theme = {
    textColor: "#ffffff",
    backgroundColor: "#000000"
}

export interface ThemeContextStateType {
    theme: Theme;
    setState: React.Dispatch<React.SetStateAction<Theme>>;
}

export const exampleContext = createContext<ThemeContextStateType>({
    theme: darkTheme,
    setState: () => {
        // Todo?
    }
})
