import {ColorValue, FlexStyle, TextStyle} from "react-native";
import {CarCardStyleSheetI} from "../types/StyleSheetTypes";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";


export function getCarCardStylesheet() : CarCardStyleSheetI{
    const theme = useContext(ThemeContext).theme

    return {
        bold: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        reverse_row: {
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingRight: 15,
        },
        car_preview_card: {
            minHeight: 150,
            borderRadius: 25,
            overflow: 'hidden',
            justifyContent: 'space-between',
            marginTop: 25,
            backgroundColor: theme.contrastColor,
            padding: 7,
        },
        car_preview_card_image_box: {
            flex: 0.6,
        },
        car_preview_card_text_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 0.38,
            Height: 150,
        },
        car_image: {
            height: 150,
            borderRadius: 25,
        }
    }
}

