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

export type backgroundStyleType = {
    flex: FlexStyle['flex'],
    backgroundColor: ColorValue
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