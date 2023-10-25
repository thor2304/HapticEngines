import {StyleSheetI} from "../components/Stylesheet"
import {View, Text, Button} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";


export function Discovery({route, navigation} : any) {
    const theme = useContext(ThemeContext).theme

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
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('CarDetails', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    );
}