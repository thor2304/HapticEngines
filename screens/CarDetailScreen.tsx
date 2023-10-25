import {getDefaultStyleSheet} from "../components/Stylesheet"
import {View, Text, Button} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {CarDetailsProps, CarDetailsScreenNavigationProp, CarDetailsScreenRouteProp} from "../App";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 */
export function CarDetailScreen({route} : CarDetailsProps, {navigation} : CarDetailsProps) {
    const theme = useContext(ThemeContext).theme

    const {itemId, otherParam} = route.params;

    const defaultStyleSheet = getDefaultStyleSheet();

    return (
        <View style={defaultStyleSheet.container}>
            <Text style={defaultStyleSheet.text}> Details about your favorite car! </Text>
            <Text style={defaultStyleSheet.text}> ItemId: {JSON.stringify(itemId)}</Text>
            <Text style={defaultStyleSheet.text}> OtherParam: {JSON.stringify(otherParam)}</Text>
            // Navigate to profle screen
        </View>
    );
}