import {ColorValue} from "react-native";
import {darkColors, lightColors} from "./ColorPalette";

export interface Theme {
    primaryColor: ColorValue;
    onPrimaryColor: ColorValue;
    secondaryColor: ColorValue;
    onSecondaryColor: ColorValue;
    backgroundColor: ColorValue;
    onBackgroundColor: ColorValue;
    navbarColor: ColorValue;
    onNavbarColor: ColorValue;
}

export const lightTheme: Theme = {
    primaryColor: lightColors.primary,
    onPrimaryColor: lightColors.onPrimary,
    secondaryColor: lightColors.secondary,
    onSecondaryColor: lightColors.onSecondary,
    backgroundColor: lightColors.background,
    onBackgroundColor: lightColors.onBackground,
    navbarColor: lightColors.navbar,
    onNavbarColor: lightColors.onNavbar
}

export const darkTheme: Theme = {
    primaryColor: darkColors.primary,
    onPrimaryColor: darkColors.onPrimary,
    secondaryColor: darkColors.secondary,
    onSecondaryColor: darkColors.onSecondary,
    backgroundColor: darkColors.background,
    onBackgroundColor: darkColors.onBackground,
    navbarColor: darkColors.navbar,
    onNavbarColor: darkColors.onNavbar
}