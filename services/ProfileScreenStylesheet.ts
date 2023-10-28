import {ProfileScreenStylesheetI} from "../types/StyleSheetTypes";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";

export function getProfileScreenStylesheet() : ProfileScreenStylesheetI {
    const theme = useContext(ThemeContext).theme
    const imageSize = 128

    return {
        name: {
            fontFamily: 'Inter',
            fontSize: 32,
            fontWeight: '700',
            color: theme.textColor,
        },
        details: {
            fontFamily: 'Inter',
            fontSize: 24,
            fontWeight: '700',
            color: theme.subTextColor,
        },
        detailsGroup: {
            alignItems: 'center',
        },
        image: {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize/2,
        },
        backgroundCard: {
            backgroundColor: theme.contrastColor,
            margin: 10,
            padding: 10,
            minHeight: 320,
            minWidth: 300,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    }
}