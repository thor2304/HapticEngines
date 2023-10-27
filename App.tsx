import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {ContextExample} from "./screens/ContextExample";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";
import {NavigatorParamList} from "./screens/ScreenParams";

const DiscoveryStack = createNativeStackNavigator<NavigatorParamList>();

function HomeStackScreen() {
    return(
        <DiscoveryStack.Navigator>
            <DiscoveryStack.Screen
                name="DiscoveryScreen"
                component={Discovery}
                options={{headerShown: false}} />
            <DiscoveryStack.Screen
                name="CarDetailsScreen"
                component={CarDetailScreen}/>
        </DiscoveryStack.Navigator>
    );
}


const MyRentalsStack = createNativeStackNavigator<NavigatorParamList>();
function MyRentalsStackScreen() {
    return(
        <MyRentalsStack.Navigator>
            <MyRentalsStack.Screen
                name="MyRentalsScreen"
                component={MyRentals}
                options={{headerShown: false}} />
        </MyRentalsStack.Navigator>
    );
}

// This type is used to define the parameters passed to the ProfileScreen
const ProfileStack = createNativeStackNavigator<NavigatorParamList>();

function ProfileStackScreen() {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ContextExample}
                options={{headerShown: false}} />
        </ProfileStack.Navigator>
    );
}

// Application
const Tab = createBottomTabNavigator<NavigatorParamList>();
export default function App() {
    return (
        <ThemeContextProvider>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false}}>
                    <Tab.Screen
                        name="DiscoveryScreen"
                        component={HomeStackScreen}
                        options={{title: 'Discover'}} />
                    <Tab.Screen
                        name="MyRentalsScreen"
                        component={MyRentalsStackScreen}
                        options={{title: 'My Rentals'}}/>
                    <Tab.Screen
                        name="ProfileScreen"
                        component={ProfileStackScreen}
                        options={{title: 'Profile'}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeContextProvider>
    );
}
