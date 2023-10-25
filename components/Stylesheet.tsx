import {ColorValue, FlexAlignType, FlexStyle} from "react-native";
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

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

export class MyStyleSheet implements StyleSheetI {
    button: buttonStyleType;
    container: containerStyleType;
    text: textStyleType;

    /**
     * @param button
     * @param container
     * @param text
     */
    constructor(button: buttonStyleType, container: containerStyleType, text: textStyleType) {
        this.button = button;
        this.container = container;
        this.text = text;
    }

    /**
     * Provides a deep copy of the MyStyleSheet object
     * @return {MyStyleSheet}
     */
    copy() {
        const buttonCopy = {...this.button};
        const containerCopy = {...this.container};
        const textCopy = {...this.text};

        return new MyStyleSheet(buttonCopy, containerCopy, textCopy);
    }
}

class FrozenStyleSheet extends MyStyleSheet {
    constructor(button: buttonStyleType, container: containerStyleType, text: textStyleType) {
        super(button, container, text);
        // Prevent overwriting of the properties of this object
        Object.freeze(this.button);
        Object.freeze(this.container);
        Object.freeze(this.text);
        Object.freeze(this);
    }
}

let defaultStyleSheet: MyStyleSheet;

/**
 * The Stylesheet that is returned from this method is frozen and its properties cannot be changed.<br>
 * Use the copy() method to get a copy of the stylesheet that can be changed.<br>
 * This stylesheet is shared between all callers, which is why it is frozen.
 */
export function getDefaultStyleSheet(): MyStyleSheet {
    if (defaultStyleSheet === undefined) {
        const theme = useContext(ThemeContext).theme

        const containerStyle: containerStyleType = {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            alignItems: 'center',
            justifyContent: 'center',
        }

        const textStyle: textStyleType = {
            color: theme.textColor,
            backgroundColor: theme.backgroundColor,
        }

        const buttonStyle: buttonStyleType = {
            backgroundColor: theme.contrastColor,
            color: theme.textColor,
        }

        defaultStyleSheet = new FrozenStyleSheet(buttonStyle, containerStyle, textStyle);
    }

    return defaultStyleSheet;
}
