import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import DiscoverySvg from "../assets/logos/oldDiscovery.svg";
import ProfileSvg from "../assets/logos/oldProfile.svg";
import MyRentalsSvg from "../assets/logos/oldMyrentals.svg";
import {RouteProp} from "@react-navigation/native";
import {NavigatorParamList} from "../screens/ScreenParams";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TouchableOpacity} from "react-native";
import {DiscoveryIcon} from "../assets/logos/discovery";
import {MyRentalsIcon} from "../assets/logos/myRentals";
import {ProfileIcon} from "../assets/logos/profile";

export function CustomTabNavigator ({children} : {children: React.ReactNode}) {

    const theme = useContext(ThemeContext).theme

    const Tab = createBottomTabNavigator<NavigatorParamList>();

    return (
        <Tab.Navigator
            backBehavior={"history"}
            screenOptions={( route: {route: RouteProp<NavigatorParamList, keyof NavigatorParamList>, navigation: any})  => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: theme.navbarColor, height: 60, paddingBottom: 10, paddingTop: 10 },
                tabBarLabelStyle: { color: theme.onNavbarColor },
                tabBarButton: (prop) => <TouchableOpacity{...prop} />,
                tabBarIcon: ({focused} : any) => {
                    if (route.route.name === 'DiscoveryScreenStack') {
                        return <DiscoveryIcon height={50} color={theme.onNavbarColor}></DiscoveryIcon>
                    } else if (route.route.name === 'ProfileScreenStack') {
                        return <ProfileIcon height={25} color={theme.onNavbarColor}></ProfileIcon>
                    } else if (route.route.name === 'MyRentalsScreenStack') {
                        return <MyRentalsIcon height={29} color={theme.onNavbarColor}></MyRentalsIcon>
                    }
                },
            })}>
            {children}
        </Tab.Navigator>
    );
}