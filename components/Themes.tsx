import {ColorValue} from "react-native";
import {darkColors, lightColors} from "./ColorPalette";

export interface Theme {
    textColor: ColorValue;
    subTextColor: ColorValue
    backgroundColor: ColorValue;
    contrastColor: ColorValue;
}

export const lightTheme: Theme = {
    textColor: lightColors.text,
    subTextColor: lightColors.subText,
    backgroundColor: lightColors.background,
    contrastColor: lightColors.contrast
}

export const darkTheme: Theme = {
    textColor: darkColors.text,
    subTextColor: darkColors.subText,
    backgroundColor: darkColors.background,
    contrastColor: darkColors.contrast
}