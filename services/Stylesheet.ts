import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";
import {
    backgroundStyleType,
    buttonStyleType,
    containerStyleType,
    StyleSheetI,
    textStyleType
} from "../types/StyleSheetTypes";

/**
 * The Stylesheet that is returned from this method is frozen and its properties cannot be changed.<br>
 * Use the copy() method to get a copy of the stylesheet that can be changed.<br>
 * This stylesheet is shared between all callers, which is why it is frozen.
 */
export function getDefaultStyleSheet(): MyStyleSheet {
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

    const backgroundStyle: backgroundStyleType = {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    }

    return new FrozenStyleSheet(buttonStyle, containerStyle, textStyle, backgroundStyle);
}

export class MyStyleSheet implements StyleSheetI {
    button: buttonStyleType;
    container: containerStyleType;
    text: textStyleType;
    background: backgroundStyleType;

    /**
     * @param button
     * @param container
     * @param text
     * @param background
     */
    constructor(button: buttonStyleType, container: containerStyleType, text: textStyleType, background: backgroundStyleType) {
        this.button = button;
        this.container = container;
        this.text = text;
        this.background = background;
    }

    /**
     * Provides a deep copy of the MyStyleSheet object
     * @return {MyStyleSheet}
     */
    copy() {
        const buttonCopy = {...this.button};
        const containerCopy = {...this.container};
        const textCopy = {...this.text};
        const backgroundCopy = {...this.background}

        return new MyStyleSheet(buttonCopy, containerCopy, textCopy, backgroundCopy);
    }
}

class FrozenStyleSheet extends MyStyleSheet {
    constructor(button: buttonStyleType, container: containerStyleType, text: textStyleType, background: backgroundStyleType) {
        super(button, container, text, background);
        // Prevent overwriting of the properties of this object
        Object.freeze(this.button);
        Object.freeze(this.container);
        Object.freeze(this.text);
        Object.freeze(this);
    }
}


