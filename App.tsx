import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {ContextExample} from "./screens/examples/ContextExample";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";
import {NavigatorParamList} from "./screens/ScreenParams";
import {Platform} from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import {CustomSafeAreaView} from "./components/CustomSafeAreaView";

const DiscoveryStack = createNativeStackNavigator<NavigatorParamList>();

function DiscoveryStackScreen() {
    return (
            <DiscoveryStack.Navigator>
                <DiscoveryStack.Screen
                    name="DiscoveryScreen"
                    component={Discovery}
                    options={{
                        headerShown: false,
                        title: 'Discover Cars'
                    }}/>
                <DiscoveryStack.Screen
                    name="CarDetailsScreen"
                    component={CarDetailScreen}/>
            </DiscoveryStack.Navigator>
    );
}

const MyRentalsStack = createNativeStackNavigator<NavigatorParamList>();

function MyRentalsStackScreen() {
    return (
        <MyRentalsStack.Navigator>
            <MyRentalsStack.Screen
                name="MyRentalsScreen"
                component={MyRentals}
                options={{headerShown: false}}/>
            <DiscoveryStack.Screen
                name="CarDetailsScreen"
                component={CarDetailScreen}/>
        </MyRentalsStack.Navigator>
    );
}

// This type is used to define the parameters passed to the ProfileScreen
const ProfileStack = createNativeStackNavigator<NavigatorParamList>();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ContextExample}
                options={{headerShown: false}}/>
        </ProfileStack.Navigator>
    );
}

// Application
const Tab = createBottomTabNavigator<NavigatorParamList>();
export default function App() {
    if(Platform.OS === 'android'){
        NavigationBar.setBackgroundColorAsync("#ffffff00").then(r => {});
        NavigationBar.setBehaviorAsync('overlay-swipe').then(r=>{});
        NavigationBar.setVisibilityAsync("hidden").then(r =>{});
    }

    return (
        <ThemeContextProvider>
            <CustomSafeAreaView>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{headerShown: false}}>
                        <Tab.Screen
                            name="DiscoveryScreenStack"
                            component={DiscoveryStackScreen}
                            options={{title: 'Discover'}}/>
                        <Tab.Screen
                            name="MyRentalsScreenStack"
                            component={MyRentalsStackScreen}
                            options={{title: 'My Rentals'}}/>
                        <Tab.Screen
                            name="ProfileScreenStack"
                            component={ProfileStackScreen}
                            options={{title: 'Profile'}}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </CustomSafeAreaView>
        </ThemeContextProvider>
    );
}
