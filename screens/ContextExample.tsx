import {Button, Text, View} from "react-native";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";
import {darkTheme, lightTheme} from "../components/Themes";
import {getDefaultStyleSheet, StyleSheetI} from "../components/Stylesheet";
import {ProfileScreenRouteProp} from "../App";

export function ContextExample (route: ProfileScreenRouteProp) {
    const context = useContext(ThemeContext);
    const theme = context.theme

    function changeState() {
        context.setTheme(context.theme === darkTheme ? lightTheme : darkTheme)

    }

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Context Example : {context.theme.textColor.toString()}</Text>
            <Button title="Change state"
                    onPress={changeState}/>
        </View>
    );
}