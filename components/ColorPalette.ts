export interface ColorPalette {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    background: string;
    onBackground: string;
}

export const lightColors: ColorPalette = {
    primary: "#2962ff",
    onPrimary: "#ffffff",
    primaryContainer: "#d7e3ff",
    onPrimaryContainer: "#001b3f",
    secondaryContainer: "#565e71",
    onSecondaryContainer: "#ffffff",
    background: "#e5f2ff",
    onBackground: "#1a1b1f"
}

export const darkColors: ColorPalette = {
    primary: "#2962ff",
    onPrimary: "#ffffff",
    primaryContainer: "#00458f",
    onPrimaryContainer: "#d7e3ff",
    secondaryContainer: "#bec6dc",
    onSecondaryContainer: "#283041",
    background: "#001429",
    onBackground: "#e3e2e6"
}