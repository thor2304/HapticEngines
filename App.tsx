import {StyleSheet} from "react-native";
import {View, Text} from "react-native";
import {ChildView} from "./components/CoolName";
import {ContextExample} from "./components/ContextExample";
import {TestComponent} from "./components/TestComponentFile";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}
export default function App() {
    return (
        //<View style={styles.container}>
        //    <ChildView name={"He"} description={"He"}></ChildView>
        //    <ContextExample></ContextExample>
        //    <NavigationContainer>
        //        <Tab.Navigator>
        //            <Tab.Screen name="Home" component={HomeScreen} />
        //        </Tab.Navigator>
        //    </NavigationContainer>
        //</View>
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="TestComponent" component={TestComponent} />
            <Tab.Screen name="ContextExample" component={ContextExample} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
