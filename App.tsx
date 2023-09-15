import {StyleSheet} from "react-native";
import {View} from "react-native";
import {ChildView} from "./components/CoolName";
import {ContextExample} from "./components/ContextExample";
import {exampleContext} from "./components/ExampleContext";
import {useState} from "react";
import {Theme} from "./components/Themes";

export default function App() {
    const [theme, setTheme] = useState<Theme>({
        textColor: "#000000",
        backgroundColor: "#00ffff"
    })

    const styles = StyleSheet.create({
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
        }
    });

    return (
        <exampleContext.Provider value={{theme: theme, setState: setTheme}}>
            <View style={styles.container}>
                <ChildView name={"He"} description={"He"} styleSheet={styles}></ChildView>
                <ContextExample></ContextExample>
            </View>
        </exampleContext.Provider>

    );
}


