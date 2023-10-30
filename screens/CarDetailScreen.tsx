import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext, useState} from "react";
import {CarDetailsProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {playHapticFeedbackMultipleTimes} from "../services/HapticFeedback";
import {RentedContext} from "../components/examples/RentedContext";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function CarDetailScreen({route, navigation} : CarDetailsProps) {
    const theme = useContext(ThemeContext).theme

    const rentedContext = useContext(RentedContext)
    const rentedList = rentedContext.rented

    function updateRented(carId: number) {
        let actualNumber = carId - 1

        for (let i = 0; i < 5; i++) {
            if (i == actualNumber) {
                let newString = "Car is currently being rented"
                rentedList[i] = newString
                setRentedText(newString)
            }
        }
        rentedContext.setRented(rentedList)
    }

    const pageStyles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        page_title_text: {
            fontSize: 30,
            fontWeight: 'bold',
            margin: 20,
        },
        image_box: {
            height: 200,
        },
        image: {
            flex: 1,
            borderRadius: 25,
            marginStart: 20,
            marginEnd: 20,
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
            marginTop: 10,
        },
        button: {
            width:50,
            height:100,
            backgroundColor: theme.contrastColor,
            paddingVertical: 5,
            borderRadius: 10,
            paddingTop: 40,
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
        },
        buttonText: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        smallText: {
            fontSize: 10,
            marginBottom: 15,
            marginLeft: 15,
            marginRight: 10,
        }
    });

    const car: Backend.Car = route.params.car;

    const [rentedText, setRentedText] = useState(rentedList[car.id - 1]);

    function runHapticFeedback() {
        playHapticFeedbackMultipleTimes(car.id)
    }

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
                        <Text style={{marginTop: 15, marginLeft: 15}}>Engine CC size: {car.engineCCSize}</Text>
                        <Text style={{marginLeft: 15}}>Doors: {car.doors}</Text>
                        <Text style={{marginLeft: 15}}>Fuel type: {car.fuelType.name}</Text>
                        <Text style={{marginBottom: 15, marginLeft: 15}}>Wheel size: {car.wheelSize}</Text>
                    </View>
                    <View style={{flex: 0.24, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25, alignContent: "center", alignItems: "center"}}>
                        <Pressable style={pageStyles.button} onPress={runHapticFeedback}><Text style={pageStyles.buttonText}>Rumble</Text></Pressable>
                    </View>
                </View>
                <View style={pageStyles.row}>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Text style={{marginTop: 10, marginLeft: 15, marginBottom: 15, fontWeight: 'bold'}}>Pricing</Text>
                        <Text style={{marginLeft: 15}}>{car.pricePerDay} / Day</Text>
                        <Text style={{marginBottom: 15, marginLeft: 15}}>{car.pricePerWeek} / Week</Text>
                    </View>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.contrastColor, borderRadius: 25}}>
                        <Text style={{marginTop: 10, marginLeft: 15, marginBottom: 5, fontWeight: 'bold'}}>Description</Text>
                        <Text style={pageStyles.smallText}>{car.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth: 0, marginTop: 20}}>
                <Button title={rentedText} onPress={
                    () => {
                        if (rentedList[car.id - 1] === "Rent Car") {
                            navigation.navigate('MyRentalsScreen')
                            updateRented(car.id)
                        }
                    }
                }></Button>
            </View>
        </View>
    );
}
