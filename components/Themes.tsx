import {ColorValue} from "react-native";
import {darkColors, lightColors} from "./ColorPalette";

export interface Theme {
    primaryColor: ColorValue;
    onPrimaryColor: ColorValue;
    primaryContainerColor: ColorValue;
    onPrimaryContainerColor: ColorValue;
    secondaryContainerColor: ColorValue;
    onSecondaryContainerColor: ColorValue;
    backgroundColor: ColorValue;
    onBackgroundColor: ColorValue;
}

export const lightTheme: Theme = {
    primaryColor: lightColors.primary,
    onPrimaryColor: lightColors.onPrimary,
    primaryContainerColor: lightColors.primaryContainer,
    onPrimaryContainerColor: lightColors.onPrimaryContainer,
    secondaryContainerColor: lightColors.secondaryContainer,
    onSecondaryContainerColor: lightColors.onSecondaryContainer,
    backgroundColor: lightColors.background,
    onBackgroundColor: lightColors.onBackground
}

export const darkTheme: Theme = {
    primaryColor: darkColors.primary,
    onPrimaryColor: darkColors.onPrimary,
    primaryContainerColor: darkColors.primaryContainer,
    onPrimaryContainerColor: darkColors.onPrimaryContainer,
    secondaryContainerColor: darkColors.secondaryContainer,
    onSecondaryContainerColor: darkColors.onSecondaryContainer,
    backgroundColor: darkColors.background,
    onBackgroundColor: darkColors.onBackground
}