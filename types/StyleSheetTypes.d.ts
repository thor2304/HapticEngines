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