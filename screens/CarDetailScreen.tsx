import {View, Text, StyleSheet, Image, Button, Pressable} from "react-native";
import {ThemeContext} from "../components/ThemeContext";
import React, {useContext, useState} from "react";
import {CarDetailsProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {playHapticFeedbackMultipleTimes} from "../services/HapticFeedback";
import {RentedContext} from "../components/RentedContext";
import {Overlay} from "@rneui/themed";
import {RentCarModal} from "../components/RentCarModal";

/**
 * This is the screen that is displayed when the user clicks on a car in the Discovery screen.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function CarDetailScreen({route, navigation}: CarDetailsProps) {
    type ValuePiece = Date | null;

    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const theme = useContext(ThemeContext).theme

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

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
            color: theme.onBackgroundColor,
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
            backgroundColor: theme.secondaryColor,
            paddingVertical: 5,
            borderRadius: 10,
            paddingTop: 40,
            alignItems: 'center',
            alignContent: 'center',
            textAlign: 'center',
        },
        buttonText: {
            color: theme.onSecondaryColor,
            fontSize: 12,
            fontWeight: 'bold',
        },
        smallText: {
            color: theme.onSecondaryColor,
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
                    <View style={{flex: 0.74, borderWidth: 0, backgroundColor: theme.secondaryColor, borderRadius: 25}}>
                        <Text style={{marginTop: 15, marginLeft: 15, color: theme.onSecondaryColor}}>Engine CC
                            size: {car.engineCCSize}</Text>
                        <Text style={{marginLeft: 15, color: theme.onSecondaryColor}}>Doors: {car.doors}</Text>
                        <Text style={{marginLeft: 15, color: theme.onSecondaryColor}}>Fuel
                            type: {car.fuelType.name}</Text>
                        <Text style={{marginBottom: 15, marginLeft: 15, color: theme.onSecondaryColor}}>Wheel
                            size: {car.wheelSize}</Text>
                    </View>
                    <View style={{
                        flex: 0.24,
                        borderWidth: 0,
                        backgroundColor: theme.secondaryColor,
                        borderRadius: 25,
                        alignContent: "center",
                        alignItems: "center"
                    }}>
                        <Pressable style={pageStyles.button} onPress={runHapticFeedback}><Text
                            style={pageStyles.buttonText}>Rumble</Text></Pressable>
                    </View>
                </View>
                <View style={pageStyles.row}>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.secondaryColor, borderRadius: 25}}>
                        <Text style={{
                            marginTop: 10,
                            marginLeft: 15,
                            marginBottom: 15,
                            fontWeight: 'bold',
                            color: theme.onSecondaryColor
                        }}>Pricing</Text>
                        <Text style={{marginLeft: 15, color: theme.onSecondaryColor}}>{car.pricePerDay} / Day</Text>
                        <Text style={{
                            marginBottom: 15,
                            marginLeft: 15,
                            color: theme.onSecondaryColor
                        }}>{car.pricePerWeek} / Week</Text>
                    </View>
                    <View style={{flex: 0.49, borderWidth: 0, backgroundColor: theme.secondaryColor, borderRadius: 25}}>
                        <Text style={{
                            marginTop: 10,
                            marginLeft: 15,
                            marginBottom: 5,
                            fontWeight: 'bold',
                            color: theme.onSecondaryColor
                        }}>Description</Text>
                        <Text style={pageStyles.smallText}>{car.description}</Text>
                    </View>
                </View>
            </View>
            <View style={{borderWidth: 0, marginTop: 20}}>
                <Button color={theme.primaryColor} title={rentedText} onPress={
                    () => {
                        toggleOverlay()
                    }
                }></Button>
                <Overlay overlayStyle={{backgroundColor: theme.backgroundColor, borderRadius: 25, padding: 25}} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <RentCarModal
                        car={car}
                        navigation={navigation}
                    />
                </Overlay>
            </View>
        </View>
    );
}
