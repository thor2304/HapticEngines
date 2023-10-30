import {getDefaultStyleSheet} from "../services/Stylesheet"
import {View, Text, StyleSheet, Image, Button} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext} from "react";
import {CarDetailsProps} from "./ScreenParams";
import {DetailList} from "../components/DetailList";
import backendHandler from "../services/BackendHandler";
import {getDetailStylesheet} from "../services/DetailStyleSheet";
import {playHapticFeedbackMultipleTimes} from "../services/HapticFeedback";

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
            backgroundColor: theme.backgroundColor,
            marginStart: 20,
            marginEnd: 20,
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
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
                    <View style={{flex: 0.74, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Text style={{marginTop: 10, marginLeft: 10}}>{car.engineCCSize}</Text>
                        <Text style={{marginLeft: 10}}>Doors: {car.doors}</Text>
                        <Text style={{marginLeft: 10}}>Fuel type: {car.fuelType.name}</Text>
                        <Text style={{marginBottom: 10, marginLeft: 10}}>Wheel size: {car.wheelSize}</Text>
                    </View>
                    <View style={{flex: 0.24, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Button title={"Rumble"} onPress={
                            () => {
                                playHapticFeedbackMultipleTimes(car.id) // Haptic feedback
                            }
                        }></Button>
                    </View>
                </View>
                <View style={pageStyles.row}>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Text style={{marginTop: 10, marginLeft: 10, marginBottom: 10, fontWeight: 'bold'}}>Pricing</Text>
                        <Text style={{marginLeft: 10}}>{car.pricePerDay} / Day</Text>
                        <Text style={{marginBottom: 10, marginLeft: 10}}>{car.pricePerWeek} / Week</Text>
                    </View>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Text style={{marginTop: 10, marginLeft: 10, marginBottom: 10, fontWeight: 'bold'}}>Description</Text>
                        <Text style={{marginBottom: 10, marginLeft: 10}}>{car.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth: 0, marginTop: 20}}>
                <Button title={"Rent car"} onPress={
                    () => {
                        console.log("Pressed rent car button")
                    }
                }></Button>
            </View>
        </View>
    );
}
