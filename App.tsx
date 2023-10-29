import {NavigationContainer} from "@react-navigation/native";
import {ThemeContextProvider} from "./components/ThemeContext";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CarDetailScreen} from "./screens/CarDetailScreen";
import {MyRentals} from "./screens/MyRentals";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Discovery} from "./screens/Discovery";
import {NavigatorParamList} from "./screens/ScreenParams";
import {ProfileScreen} from "./screens/ProfileScreen";
import {Platform} from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import {CustomSafeAreaView} from "./components/CustomSafeAreaView";
import {CustomTabNavigator} from "./components/CustomTabNavigator";
import userContext, {UserContextProvider} from "./components/UserContext";
import User from "./types/classes/User";
import UserContext from "./components/UserContext";
import {useContext} from "react";

const DiscoveryStack = createNativeStackNavigator<NavigatorParamList>();

// TODO: Har prøvet at assigne id'en her, ved ikke om der er et bedre sted at gøre det.
const [user, setUser] = useContext(UserContext);
setUser({id: 1});

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
                component={ProfileScreen}
                options={{headerShown: false}} />
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
        <UserContextProvider>
            <ThemeContextProvider>
                <CustomSafeAreaView>
                    <NavigationContainer>
                        <CustomTabNavigator>
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
                        </CustomTabNavigator>
                    </NavigationContainer>
                </CustomSafeAreaView>
            </ThemeContextProvider>
        </UserContextProvider>
    );
}
