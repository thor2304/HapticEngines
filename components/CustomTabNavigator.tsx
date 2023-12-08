import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import DiscoverySvg from "../assets/logos/discovery.svg";
import ProfileSvg from "../assets/logos/profile.svg";
import MyRentalsSvg from "../assets/logos/myrentals.svg";
import {RouteProp} from "@react-navigation/native";
import {NavigatorParamList} from "../screens/ScreenParams";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TouchableOpacity} from "react-native";

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
                        return <DiscoverySvg height={30}></DiscoverySvg>
                    } else if (route.route.name === 'ProfileScreenStack') {
                        return <ProfileSvg height={25}></ProfileSvg>
                    } else if (route.route.name === 'MyRentalsScreenStack') {
                        return <MyRentalsSvg height={25}></MyRentalsSvg>
                    }
                },
            })}>
            {children}
        </Tab.Navigator>
    );
}