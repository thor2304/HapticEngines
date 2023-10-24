import {ContextExample} from "./screens/ContextExample";
import {TestComponent} from "./screens/TestComponentFile";
import {HomeScreen} from "./screens/HomeScreen"
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {DetailStackComponent} from "./components/DetailStackComponent";

const Tab = createBottomTabNavigator();

export default function App() {

    // @ts-ignore
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="DetailStack" component={DetailStackComponent} />
                <Tab.Screen name="TestComponent" component={TestComponent} />
                <Tab.Screen name="ContextExample" component={ContextExample} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
