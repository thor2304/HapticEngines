import {StyleSheet} from "../components/ColorPalette"
import {Button, View} from "react-native";
import {ChildView} from "../components/CoolName";
import {ContextExample} from "./ContextExample";
import {exampleContext} from "../components/ExampleContext";
import {useState} from "react";
import {Theme} from "../components/Themes";
import {StarWars} from "../components/starWars";

export function HomeScreen({ navigation }) {
    const [theme, setTheme] = useState<Theme>({
        contrastColor: "#365050",
        textColor: "#000000",
        backgroundColor: "#00ffff"
    })

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheet = {
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
        <exampleContext.Provider value={{theme: theme, setState: setTheme}}>
            <View style={styles.container}>
                <ChildView name={"He"} description={"He"} styleSheet={styles}></ChildView>
                <ContextExample></ContextExample>
                <StarWars></StarWars>
            </View>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('CarDetail', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </exampleContext.Provider>
    );
}