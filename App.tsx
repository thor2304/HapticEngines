import {NavigationContainer} from "@react-navigation/native";
import {ThemeContext, ThemeContextProvider} from "./components/ThemeContext";
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
import {useContext, useState} from "react";
import DiscoverySvg from "./assets/logos/discovery.svg";
import ProfileSvg from "./assets/logos/profile.svg";
import MyRentalsSvg from "./assets/logos/myrentals.svg";

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

    // Themes context

    const [theme, setTheme] = useState(useContext(ThemeContext).theme);

    return (
        <ThemeContextProvider>
                <CustomSafeAreaView>
                    <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={( route) => ({
                            headerShown: false,
                            tabBarStyle: { backgroundColor: theme.backgroundColor, height: 60, paddingBottom: 10, paddingTop: 10 },
                            tabBarLabelStyle: { color: theme.textColor },
                            tabBarIcon: ({focused}) => {
                                setTheme(useContext(ThemeContext).theme);
                                if (route.route.name === 'DiscoveryScreenStack') {
                                    return <DiscoverySvg height={30}></DiscoverySvg>
                                } else if (route.route.name === 'ProfileScreenStack') {
                                    return <ProfileSvg height={25}></ProfileSvg>
                                } else if (route.route.name === 'MyRentalsScreenStack') {
                                    return <MyRentalsSvg height={25}></MyRentalsSvg>
                                }
                            },
                        })}>
                            <Tab.Screen
                                name="DiscoveryScreenStack"
                                component={DiscoveryStackScreen}
                                options={{title: 'Discover'}}
                            />
                            <Tab.Screen
                                name="MyRentalsScreenStack"
                                component={MyRentalsStackScreen}
                                options={{title: 'My Rentals'}}
                            />
                            <Tab.Screen
                                name="ProfileScreenStack"
                                component={ProfileStackScreen}
                                options={{title: 'Profile'}}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                </CustomSafeAreaView>
        </ThemeContextProvider>
    );
}
