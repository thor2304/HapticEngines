import React, {useContext} from 'react';

import {View, Text} from 'react-native';
import {ThemeContext} from "../components/ThemeContext";
import {getDefaultStyleSheet, StyleSheetI} from "../components/Stylesheet";

const MyRentals = ({ navigation } : any) => {
    const theme = useContext(ThemeContext).theme

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet()
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Hello </Text>
        </View>
    );
}

export {MyRentals};