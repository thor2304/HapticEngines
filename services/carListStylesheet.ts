import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";
import {CarListStyleSheetI} from "../types/StyleSheetTypes";

export function getCarListStylesheet(): CarListStyleSheetI{
    const theme = useContext(ThemeContext).theme

    return {
        car_list: {
            flex: 1,
            paddingLeft: 25,
            paddingRight: 25,
        },
        car_list_title: {
            fontWeight: 'bold',
            fontSize: 25,
            color: theme.onBackgroundColor,
        }
    }
}