import {ColorValue, FlexAlignType, FlexStyle} from "react-native";

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

export type buttonStyleType = { backgroundColor: ColorValue; color: ColorValue };
export type containerStyleType = {
    flex: number;
    backgroundColor: ColorValue;
    color: ColorValue;
    alignItems: FlexAlignType;
    justifyContent: FlexStyle["justifyContent"]
};
export type textStyleType = { color: ColorValue; backgroundColor: ColorValue };