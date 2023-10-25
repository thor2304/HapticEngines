import {StyleSheetI} from "../components/Stylesheet"
import {View} from "react-native";
import {ChildView} from "../components/CoolName";
import {ThemeContext} from "../components/ThemeContext";
import {useContext} from "react";


export function CarDetailScreen() {
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
            <ChildView name={"Hej"} description={"Hej"} styleSheet={styles}></ChildView>
        </View>
    );
}