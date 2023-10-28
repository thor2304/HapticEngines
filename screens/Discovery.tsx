import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from "react-native";
import React, {useContext, useState} from "react";
import {DiscoveryProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {CarList} from "../components/CarList";
import {ThemeContext} from "../components/ThemeContext";

/**
 * This is the primary screen, showing all the cars
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function Discovery({route, navigation}: DiscoveryProps) {

    const theme = useContext(ThemeContext).theme

    const pageStyles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        }
    });

    const allCars: Backend.CarCollection = []

    let [data, setData] = useState(allCars);

    backendHandler.getCars().then((cars) => {
        setData(cars)
    }).catch((error) => {
        console.log(error)
    })

    return (
        <View style={pageStyles.background}>
            <CarList params={{
                    data:data,
                    switchAlignment: true
                }} navigation={
                navigation
            }>

            </CarList>
        </View>
    );
}
