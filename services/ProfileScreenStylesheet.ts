import {ProfileScreenStylesheetI} from "../types/StyleSheetTypes";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";

export function getProfileScreenStylesheet() : ProfileScreenStylesheetI {
    const theme = useContext(ThemeContext).theme

    return {
        name: {
            fontFamily: 'Inter',
            fontSize: 32,
            fontWeight: '700',
            color: theme.textColor,
        },
        details: {
            fontFamily: 'Inter',
            fontSize: 26,
            fontWeight: '700',
            color: theme.subTextColor,
        },
        image: {
            width: 128,
            height: 128,
        }
    }
}