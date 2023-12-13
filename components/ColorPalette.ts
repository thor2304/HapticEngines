export interface ColorPalette {
    primary: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    background: string;
    onBackground: string;
    navbar: string;
    onNavbar: string;
}

export const lightColors: ColorPalette = {
    primary: "#2962ff",
    onPrimary: "#ffffff",
    secondary: "#3599FD",
    onSecondary: "#ffffff",
    background: "#e5f2ff",
    onBackground: "#1a1b1f",
    navbar: "#e1f5fe",
    onNavbar: "#3e4759"
}

export const darkColors: ColorPalette = {
    primary: "#2962ff",
    onPrimary: "#ffffff",
    secondary: "#4d9df1",
    onSecondary: "#003354",
    background: "#001429",
    onBackground: "#e3e2e6",
    navbar: "#000017",
    onNavbar: "#dae2f9"
}