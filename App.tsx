import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {ContextExample} from "./screens/ContextExample";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";


type CarDetailParams = { itemId: number, otherParam: string };
type DiscoveryParams = undefined;
type RentalParams = undefined;
type ProfileParams = {userId: number};

// This type is used to define the parameters passed to the CarDetailsScreen and the DiscoveryScreen
type NavigatorParamList = {
    CarDetailsScreen: CarDetailParams;
    DiscoveryScreen: DiscoveryParams;
    MyRentalsScreen: RentalParams;
    ProfileScreen: ProfileParams;
}

const DiscoveryStack = createNativeStackNavigator<NavigatorParamList>();
// Props for DiscoveryScreen
export type DiscoveryProps = NativeStackScreenProps<NavigatorParamList, 'DiscoveryScreen'>
function HomeStackScreen() {
    return(
        <DiscoveryStack.Navigator>
            <DiscoveryStack.Screen
                name="DiscoveryScreen"
                component={Discovery}
                options={{headerShown: false}} />
            <DiscoveryStack.Screen
                name="CarDetailsScreen"
                component={CarDetailScreen}
                // The initialParams are the parameters passed to the screen when it is first created
                initialParams={{itemId: 0, otherParam: ""}}/>
        </DiscoveryStack.Navigator>
    );
}

// This type is used to define the parameters passed to the MyRentalsScreen
type MyRentalsStackParamList = {
    MyRentalsScreen: RentalParams;
}
const MyRentalsStack = createNativeStackNavigator<MyRentalsStackParamList>();
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
// Props for ProfileScreen
export type ProfileProps = NativeStackScreenProps<NavigatorParamList, 'ProfileScreen'>

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

// Props for CarDetailsScreen
export type CarDetailsProps = NativeStackScreenProps<NavigatorParamList, 'CarDetailsScreen'>

// Props for MyRentalsScreen
export type MyRentalsProps = NativeStackScreenProps<NavigatorParamList, 'MyRentalsScreen'>


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
