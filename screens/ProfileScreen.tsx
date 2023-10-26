import {getDefaultStyleSheet} from "../components/Stylesheet"
import {StyleSheetI} from "../components/types/StyleSheetTypes";
import {View} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {DiscoveryProps} from "./ScreenParams";

/**
 * This is the primary screen, showing all the cars
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : DiscoveryProps) {
    const theme = useContext(ThemeContext).theme

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()

    return (
        <View style={styles.container}>
            {/*<Text style={styles.text}>Context Example : {context.theme.textColor.toString()}</Text>*/}
            {/*<Button title="Change state"*/}
            {/*        onPress={changeState}/>*/}
        </View>
    );
}