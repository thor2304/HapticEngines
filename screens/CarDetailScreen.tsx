import {getDefaultStyleSheet} from "../services/Stylesheet"
import {View, Text, StyleSheet, Image, Button} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {CarDetailsProps} from "./ScreenParams";
import {DetailList} from "../components/DetailList";
import backendHandler from "../services/BackendHandler";
import {getDetailStylesheet} from "../services/DetailStyleSheet";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function CarDetailScreen({route, navigation} : CarDetailsProps) {
    const theme = useContext(ThemeContext).theme

    const pageStyles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        page_title_text: {
            fontSize: 30,
            fontWeight: 'bold',
        },
        image_box: {
            height: 200,
        },
        image: {
            flex: 1,
            borderRadius: 25,
        },
        details_box: {
            flexDirection: 'column',
            alignContent: 'space-between',
            justifyContent: 'space-between',
            borderWidth: 5,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            borderWidth: 5,
        }
    });

    const car: Backend.Car = route.params.car;

    return (
        <View style={pageStyles.background}>
            <View>
                <Text style={pageStyles.page_title_text}>{car.model}</Text>
            </View>
            <View style={pageStyles.image_box}>
                <Image
                    style={pageStyles.image}
                    source={{
                        uri: backendHandler.getImageUrl(car.imageName),
                    }}
                />
            </View>
            <View style={pageStyles.details_box}>
                <View style={pageStyles.row}>
                    <View style={{flex: 0.74, borderWidth: 2}}>
                        <Text>{car.engineCCSize}</Text>
                        <Text>Doors: {car.doors}</Text>
                        <Text>Fuel type: {car.fuelType.name}</Text>
                        <Text>Wheel size: {car.wheelSize}</Text>
                    </View>
                    <View style={{flex: 0.24, borderWidth: 2}}>
                        <Text>Rumble</Text>
                    </View>
                </View>
                <View style={pageStyles.row}>
                    <View style={{flex: 0.49, borderWidth: 2}}>
                        <Text>Pricing</Text>
                        <Text>{car.pricePerDay} / Day</Text>
                        <Text>{car.pricePerWeek} / Week</Text>
                    </View>
                    <View style={{flex: 0.49, borderWidth: 2}}>
                        <Text>Description</Text>
                        <Text>{car.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth: 5}}>
                <Button title={"Rent car"} onPress={
                    () => {
                        console.log("Pressed rent car button")
                    }
                }></Button>
            </View>
        </View>
    );
}
