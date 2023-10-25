import {getDefaultStyleSheet} from "../components/Stylesheet"
import {View, Text} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import {useContext} from "react";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 */
export function CarDetailScreen({route}) {
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