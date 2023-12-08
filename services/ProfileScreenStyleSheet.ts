import {ProfileScreenStylesheetI} from "../types/StyleSheetTypes";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";

export function getProfileScreenStyleSheet() : ProfileScreenStylesheetI {
    const theme = useContext(ThemeContext).theme
    const imageSize = 128

    return {
        name: {
            fontSize: 32,
            fontWeight: '700',
            color: theme.onSecondaryColor,
        },
        details: {
            fontSize: 24,
            fontWeight: '700',
            color: theme.onSecondaryColor,
        },
        detailsGroup: {
            alignItems: 'center',
        },
        image: {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
        },
        backgroundCard: {
            backgroundColor: theme.secondaryColor,
            margin: 10,
            padding: 10,
            minHeight: 320,
            minWidth: 300,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        button: {
            backgroundColor: theme.secondaryColor,
            paddingVertical: 5,
            minWidth: 150,
            borderRadius: 10,
            alignItems: 'center',
        },
        buttonText: {
            fontSize: 12,
            fontWeight: '700',
            color: theme.onSecondaryColor,
        }
    }
}