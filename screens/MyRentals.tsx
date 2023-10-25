import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {ThemeContext} from "../components/ThemeContext";
import {getDefaultStyleSheet} from "../components/Stylesheet";
import {StyleSheetI} from "../components/types/StyleSheetTypes";
import {MyRentalsProps} from "./ScreenParams";

export function MyRentals({route, navigation}: MyRentalsProps){
    const theme = useContext(ThemeContext).theme

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello </Text>
        </View>
    );
}

