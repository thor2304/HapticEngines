import {NavigationContainer, RouteProp, useRoute} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator, NativeStackScreenProps, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {ContextExample} from "./screens/ContextExample";
import {BottomTabNavigationProp, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";


// This type is used to define the parameters passed to the CarDetailsScreen and the DiscoveryScreen
type DiscoveryStackParamList = {
    CarDetailsScreen: { itemId: number, otherParam: string };
    DiscoveryScreen: undefined;
}
const DiscoveryStack = createNativeStackNavigator<DiscoveryStackParamList>();
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
    MyRentalsScreen: undefined;
}
const MyRentalsStack = createNativeStackNavigator();
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
type ProfileStackParamList = {
    ProfileScreen: {userId: number};
}
const ProfileStack = createNativeStackNavigator();
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
export type CarDetailsProps = NativeStackScreenProps<DiscoveryStackParamList, 'CarDetailsScreen'>
export type CarDetailsScreenNavigationProp = CarDetailsProps['navigation']
export type CarDetailsScreenRouteProp = CarDetailsProps['route']

// Props for DiscoveryScreen
type DiscoveryProps = NativeStackScreenProps<DiscoveryStackParamList, 'DiscoveryScreen'>
export type DiscoveryScreenNavigationProp = DiscoveryProps['navigation']
export type DiscoveryScreenRouteProp = DiscoveryProps['route']

// Props for MyRentalsScreen
type MyRentalsProps = NativeStackScreenProps<MyRentalsStackParamList, 'MyRentalsScreen'>
export type MyRentalsScreenNavigationProp = MyRentalsProps['navigation']
export type MyRentalsScreenRouteProp = MyRentalsProps['route']

// Props for ProfileScreen
type ProfileProps = NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>
export type ProfileScreenNavigationProp = ProfileProps['navigation']
export type ProfileScreenRouteProp = ProfileProps['route']

// Application
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
