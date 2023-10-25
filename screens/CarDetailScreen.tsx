import {StyleSheetI} from "../components/Stylesheet"
import {View, Text} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import {useContext} from "react";


export function CarDetailScreen( {route, navigation} : any) {
    const theme = useContext(ThemeContext).theme

    const { itemId, otherParam } = route.params;

    // Stylesheet using the StyleSheetInterface from Stylesheet.tsx
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
            <Text style={styles.text}> Details about your favorite car! </Text>
            <Text style={styles.text}> ItemId: {JSON.stringify(itemId)}</Text>
            <Text style={styles.text}> OtherParam: {JSON.stringify(otherParam)}</Text>
        </View>
    );
}