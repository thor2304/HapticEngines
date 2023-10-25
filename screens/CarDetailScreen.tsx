import {getDefaultStyleSheet} from "../components/Stylesheet"
import {View, Text, StyleSheet} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import {useContext} from "react";


export function CarDetailScreen({route, navigation}: any) {
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