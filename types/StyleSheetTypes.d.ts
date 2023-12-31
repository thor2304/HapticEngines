import {ColorValue, FlexAlignType, FlexStyle, TextStyle} from "react-native";

export interface StyleSheetI {
    container: {
        flex: number;
        backgroundColor: ColorValue;
        color: ColorValue;
        alignItems: FlexAlignType;
        justifyContent: FlexStyle["justifyContent"];
    },
    text: {
        color: ColorValue;
        backgroundColor: ColorValue;
    },
    button: {
        backgroundColor: ColorValue;
        color: ColorValue;
    }
    background: {
        flex: FlexStyle['flex'],
        backgroundColor: ColorValue
    }
}

export interface CarPreviewCard {
    minHeight: FlexStyle['minHeight'],
    borderRadius: number,
    overflow: FlexStyle['overflow'],
    justifyContent: FlexStyle['justifyContent'],
    marginTop: FlexStyle['marginTop'],
    marginBottom: FlexStyle['marginBottom'],
    backgroundColor: ColorValue,
    padding: number,
}

export interface CarListStyleSheetI {
    car_list: {
        flex: FlexStyle['flex'],
        paddingLeft: FlexStyle['paddingLeft'],
        paddingRight: FlexStyle['paddingRight'],
    },
    car_list_title: {
        fontWeight: TextStyle['fontWeight'],
        fontSize: TextStyle['fontSize'],
        color: ColorValue,
    }
}
export interface CarCardStyleSheetI {
    bold: {
        fontWeight: TextStyle['fontWeight']
    },
    row: {
        flexDirection: FlexStyle['flexDirection'],
        flexWrap: FlexStyle['flexWrap'],
        justifyContent: FlexStyle['justifyContent'],
    },
    reverse_row: {
        flexDirection: FlexStyle['flexDirection'],
        flexWrap: FlexStyle['flexWrap'],
        justifyContent: FlexStyle['justifyContent'],
        paddingRight: FlexStyle['paddingRight'],
    },
    car_preview_card: CarPreviewCard,
    car_preview_card_image_box: {
        flex: FlexStyle['flex'],
    },
    car_preview_card_text_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        flex: FlexStyle['flex'],
        Height: FlexStyle['height'],
    },
    car_preview_card_text: {
        color: ColorValue,
    },
    car_image: {
        height: FlexStyle['height'],
        borderRadius: number,
    }
}

export interface DetailPreviewCard {
    minHeight: FlexStyle['minHeight'],
    borderRadius: number,
    overflow: FlexStyle['overflow'],
    justifyContent: FlexStyle['justifyContent'],
    marginTop: FlexStyle['marginTop'],
    marginBottom: FlexStyle['marginBottom'],
    backgroundColor: ColorValue,
    padding: number,
}
export type backgroundStyleType = {
    flex: FlexStyle['flex'],
    backgroundColor: ColorValue
}
export interface ProfileScreenStylesheetI {
    name: {
        fontSize: TextStyle['fontSize'],
        fontWeight: TextStyle['fontWeight'],
        color: TextStyle['color'],
    },
    details: {
        fontSize: TextStyle['fontSize'],
        fontWeight: TextStyle['fontWeight'],
        color: ColorValue,
    },
    detailsGroup: {
        alignItems: FlexStyle['alignItems'],
    },
    image: {
        width: FlexStyle['width'],
        height: FlexStyle['height'],
        borderRadius: number,
    },
    backgroundCard: {
        backgroundColor: ColorValue,
        margin: FlexStyle['margin'],
        padding: FlexStyle['padding'],
        minHeight: FlexStyle['minHeight'],
        minWidth: FlexStyle['minWidth'],
        borderRadius: number,
        alignItems: FlexStyle['alignItems'],
        justifyContent: FlexStyle['justifyContent'],
    },
    button: {
        backgroundColor: ColorValue,
        paddingVertical: FlexStyle['paddingVertical'],
        minWidth: FlexStyle['minWidth'],
        borderRadius: number,
        alignItems: FlexStyle['alignItems'],
    },
    buttonText: {
        fontSize: TextStyle['fontSize'],
        fontWeight: TextStyle['fontWeight'],
        color: ColorValue,
    }
}

export interface DetailStyleSheetI {
    bold: {
        fontWeight: TextStyle['fontWeight']
    },
    row: {
        flexDirection: FlexStyle['flexDirection'],
    },
    reverse_row: {
        flexDirection: FlexStyle['flexDirection'],
        flexWrap: FlexStyle['flexWrap'],
        justifyContent: FlexStyle['justifyContent'],
        paddingRight: FlexStyle['paddingRight'],
    },
    detail_preview_card: DetailPreviewCard,
    detail_preview_card_image_box: {
        flex: FlexStyle['flex'],
    },
    detail_text_container_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        Height: FlexStyle['height'],
        MarginTop: FlexStyle['marginTop'],
    },
    detail_preview_card_specs_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        flex: FlexStyle['flex'],
        Height: FlexStyle['height'],
        backgroundColor: ColorValue,
        MarginTop: FlexStyle['marginTop'],
    },
    detail_preview_card_rumble_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        flex: FlexStyle['flex'],
        Height: FlexStyle['height'],
        backgroundColor: ColorValue,
        MarginTop: FlexStyle['marginTop'],
    },
    detail_preview_card_pricing_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        flex: FlexStyle['flex'],
        Height: FlexStyle['height'],
        backgroundColor: ColorValue,
        MarginTop: FlexStyle['marginTop'],
    },
    detail_preview_card_description_box: {
        flexDirection: FlexStyle['flexDirection'],
        justifyContent: FlexStyle['justifyContent'],
        flex: FlexStyle['flex'],
        Height: FlexStyle['height'],
        backgroundColor: ColorValue,
        MarginTop: FlexStyle['marginTop'],
    },
    detail_preview_card_text: {
        color: ColorValue,
    },
    detail_image: {
        height: FlexStyle['height'],
    }
    detail_button: {
        backgroundColor: ColorValue,
        color: ColorValue,
    }
    detail_button_text: {
        color: ColorValue,
    }
}


export type buttonStyleType = { backgroundColor: ColorValue; color: ColorValue };
export type containerStyleType = {
    flex: number;
    backgroundColor: ColorValue;
    color: ColorValue;
    alignItems: FlexAlignType;
    justifyContent: FlexStyle["justifyContent"]
};
export type textStyleType = { color: ColorValue; backgroundColor: ColorValue };