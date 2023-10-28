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

export interface ProfileScreenStylesheetI {
    name: {
        fontFamily: TextStyle['fontFamily'],
        fontSize: TextStyle['fontSize'],
        fontWeight: TextStyle['fontWeight'],
        color: TextStyle['color'],
    },
    details: {
        fontFamily: TextStyle['fontFamily'],
        fontSize: TextStyle['fontSize'],
        fontWeight: TextStyle['fontWeight'],
        color: ColorValue,
    },
    detailsGroup: {
        alignItems: FlexStyle['alignItems'],
    }
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