import {HomeScreen} from "./screens/HomeScreen"
import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <ThemeContextProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
                    <Stack.Screen name="CarDetails" component={CarDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeContextProvider>
    );
}
