import {DetailStyleSheetI, DetailPreviewCard} from "../types/StyleSheetTypes";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";


export function getDetailStylesheet() : DetailStyleSheetI{
    const theme = useContext(ThemeContext).theme

    const detailPreviewCard: DetailPreviewCard = {
        minHeight: 150,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: theme.primaryColor,
        padding: 7,
    }

    return {
        detail_button: {
            backgroundColor: theme.primaryColor,
            color: theme.onPrimaryColor
        },
        detail_button_text: {
            color: theme.onPrimaryColor
        },
        bold: {
            fontWeight: 'bold',
        },
        row: {
            flexDirection: 'row',
        },
        reverse_row: {
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingRight: 15,
        },
        detail_preview_card: detailPreviewCard,
        detail_preview_card_image_box: {
            flex: 1,
        },
        detail_text_container_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            Height: 800,
            MarginTop: 50,
        },
        detail_preview_card_specs_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 0.78,
            Height: 200,
            backgroundColor: theme.primaryColor,
            MarginTop: 40,
        },
        detail_preview_card_rumble_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 0.18,
            Height: 200,
            backgroundColor: theme.primaryColor,
            MarginTop: 40,
        },
        detail_preview_card_pricing_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 0.48,
            Height: 200,
            backgroundColor: theme.primaryColor,
            MarginTop: 40,
        },
        detail_preview_card_description_box: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 0.48,
            Height: 200,
            backgroundColor: theme.primaryColor,
            MarginTop: 40,
        },
        detail_preview_card_text: {
            color: theme.onPrimaryColor,
        },
        detail_image: {
            height: 200,
        }
    }
}