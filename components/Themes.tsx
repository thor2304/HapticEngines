import {ColorValue} from "react-native";
import {darkColors, lightColors} from "./ColorPalette";

export interface Theme {
    textColor: ColorValue;
    backgroundColor: ColorValue;
    contrastColor: ColorValue;
}

export const lightTheme: Theme = {
    textColor: lightColors.text,
    backgroundColor: lightColors.background,
    contrastColor: lightColors.contrast
}

export const darkTheme: Theme = {
    textColor: darkColors.text,
    backgroundColor: darkColors.background,
    contrastColor: darkColors.contrast
}