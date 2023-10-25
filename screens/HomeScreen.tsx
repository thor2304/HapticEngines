import {StyleSheetI} from "../components/Stylesheet"
import {Button, View} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import {useContext, useState} from "react";

export function HomeScreen({ navigation } : any) {
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
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('CarDetailScreen', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    );
}