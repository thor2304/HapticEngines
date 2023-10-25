import {getDefaultStyleSheet, StyleSheetI} from "../components/Stylesheet"
import {View, Text, Button} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {DiscoveryScreenNavigationProp} from "../App";

/**
 * This is the primary screen, showing all the cars
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function Discovery(navigation : DiscoveryScreenNavigationProp) {
    const theme = useContext(ThemeContext).theme

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('CarDetailsScreen', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    );
}