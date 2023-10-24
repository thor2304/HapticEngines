import {StyleSheetI} from "../components/Stylesheet"
import {Button, View} from "react-native";
import {ChildView} from "../components/CoolName";
import {ContextExample} from "./ContextExample";
import {exampleContext} from "../components/ExampleContext";
import {useState} from "react";
import {Theme} from "../components/Themes";
import {StarWars} from "../components/starWars";

export function CarDetailScreen() {
    const [theme, setTheme] = useState<Theme>({
        contrastColor: "#365050",
        textColor: "#000000",
        backgroundColor: "#ffffff"
    })

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
        <exampleContext.Provider value={{theme: theme, setState: setTheme}}>
            <View style={styles.container}>
                <ChildView name={"Hej"} description={"Hej"} styleSheet={styles}></ChildView>
                <ContextExample></ContextExample>
                <StarWars></StarWars>
            </View>
        </exampleContext.Provider>
    );
}