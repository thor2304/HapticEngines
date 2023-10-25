import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {ContextExample} from "./screens/ContextExample";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="DiscoveryScreen" component={Discovery} options={{headerShown: false}} />
            <HomeStack.Screen name="CarDetailsScreen" component={CarDetailScreen} />
        </HomeStack.Navigator>
    );
}

const MyRentalsStack = createNativeStackNavigator();
function MyRentalsStackScreen() {
    return(
        <MyRentalsStack.Navigator>
            <MyRentalsStack.Screen name="MyRentalsScreen" component={MyRentals} options={{headerShown: false}} />
        </MyRentalsStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ContextExample} options={{headerShown: false}} />
        </ProfileStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
export default function App() {

    return (
        <ThemeContextProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false}}>
                    <Tab.Screen name="Discovery" component={HomeStackScreen} />
                    <Tab.Screen name="MyRentals" component={MyRentalsStackScreen} />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeContextProvider>
    );
}
