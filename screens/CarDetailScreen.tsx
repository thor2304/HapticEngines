import {getDefaultStyleSheet} from "../components/Stylesheet"
import {View, Text} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {CarDetailsProps} from "./ScreenParams";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function CarDetailScreen({route, navigation} : CarDetailsProps) {
    const theme = useContext(ThemeContext).theme

    const {itemId, otherParam} = route.params;

    const defaultStyleSheet = getDefaultStyleSheet();

    return (
        <View style={defaultStyleSheet.container}>
            <Text style={defaultStyleSheet.text}> Details about your favorite car! </Text>
            <Text style={defaultStyleSheet.text}> ItemId: {JSON.stringify(itemId)}</Text>
            <Text style={defaultStyleSheet.text}> OtherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    );
}