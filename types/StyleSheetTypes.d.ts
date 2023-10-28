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
        color: TextStyle['color'],
    },
    image: {
        width: number,
        height: number,
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