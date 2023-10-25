import {Button, Text, View} from "react-native";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";
import {darkTheme, lightTheme} from "../components/Themes";
import {StyleSheetI} from "../components/Stylesheet";

export function ContextExample () {
    const context = useContext(ThemeContext);
    const theme = context.theme

    function changeState() {
        context.setTheme(context.theme === darkTheme ? lightTheme : darkTheme)

    }

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = {
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            color: theme.textColor,
            backgroundColor: theme.backgroundColor,
        },
        button: {
            backgroundColor: theme.contrastColor,
            color: theme.textColor,
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Context Example : {context.theme.textColor.toString()}</Text>
            <Button title="Change state"
                    onPress={changeState}/>
        </View>
    );
}