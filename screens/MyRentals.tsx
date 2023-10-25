import React, {useContext} from 'react';

import {View, Text} from 'react-native';
import {ThemeContext} from "../components/ThemeContext";
import {StyleSheetI} from "../components/Stylesheet";

const MyRentals = ({ navigation } : any) => {
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
            <Text style={styles.text}> Hello </Text>
        </View>
    );
}

export {MyRentals};