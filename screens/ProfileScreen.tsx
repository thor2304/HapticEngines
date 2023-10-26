import {getDefaultStyleSheet} from "../components/Stylesheet"
import {StyleSheetI} from "../components/types/StyleSheetTypes";
import {Text, View, StyleSheet} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {DiscoveryProps} from "./ScreenParams";
import {darkTheme, lightTheme} from "../components/Themes";

/**
 * This is the primary screen, showing all the cars
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : DiscoveryProps) {
    const context = useContext(ThemeContext);
    const theme = context.theme

    function changeState() {
        context.setTheme(context.theme === darkTheme ? lightTheme : darkTheme)

    }

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()
    const profilePicture = StyleSheet.create({
        image: {
            width: 128,
            height: 128,
        }
    })

    return (
        <View style={styles.container}>
            <Image
                style={profilePicture.image}
                source={require('add image path here')} />
            <Text style={styles.text}>Chad Payne</Text>
            <Text style={styles.text}>chad@beauty.com</Text>
        </View>
    );
}