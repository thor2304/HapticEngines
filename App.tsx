import {StyleSheet} from "react-native";
import {View} from "react-native";
import {ChildView} from "./components/CoolName";
import {ContextExample} from "./components/ContextExample";
import {TestComponent} from "./components/TestComponentFile";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {exampleContext} from "./components/ExampleContext";
import {useState} from "react";
import {Theme} from "./components/Themes";
import {StarWars} from "./components/starWars";

const Tab = createBottomTabNavigator();



function HomeScreen() {
    const [theme, setTheme] = useState<Theme>({
        contrastColor: "#365050",
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
                <StarWars></StarWars>
            </View>
        </exampleContext.Provider>
    );
}
export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="TestComponent" component={TestComponent} />
                <Tab.Screen name="ContextExample" component={ContextExample} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
