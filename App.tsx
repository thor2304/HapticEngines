import {HomeScreen} from "./screens/HomeScreen"
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ThemeContextProvider} from "./components/ThemeContext";
import {TestComponent} from "./screens/TestComponentFile";
import {ContextExample} from "./screens/ContextExample";

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <ThemeContextProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="HomeScreen" component={HomeScreen} />
                    <Tab.Screen name="TestComponent" component={TestComponent} />
                    <Tab.Screen name="ContextExample" component={ContextExample} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeContextProvider>
    );
}
