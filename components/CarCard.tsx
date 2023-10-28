import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import backendHandler from "../services/BackendHandler";
import {CarCardPropsForReal} from "../screens/ScreenParams";
import {getCarCardStylesheet} from "../services/CarCardStylesheet";
import {playHapticFeedbackMultipleTimes} from "../services/HapticFeedback";

function CarCard({params, navigation}: CarCardPropsForReal ){
    const car = params.car
    const alignLeft = params.alignLeft

    const pageStyles = getCarCardStylesheet()

    return (
        <TouchableOpacity
            onPress={() => {
                playHapticFeedbackMultipleTimes(car.id) // Haptic feedback
                /* 1. Navigate to the Details route with params */
                navigation.navigate('CarDetailsScreen', {
                    car: car,
                });
            }}
        >
            <View style={pageStyles.car_preview_card}>
                <View style={alignLeft ? pageStyles.row : pageStyles.reverse_row}>
                    <View style={pageStyles.car_preview_card_image_box}>
                        <Image
                            style={pageStyles.car_image}
                            source={{
                                uri: backendHandler.getImageUrl(car.imageName),
                            }}
                        />
                    </View>
                    <View style={pageStyles.car_preview_card_text_box}>
                        <Text style={pageStyles.car_preview_card_text}>{car.model}</Text>
                        <Text style={pageStyles.car_preview_card_text}>Doors: {car.doors}</Text>
                        <Text style={pageStyles.car_preview_card_text}>Fuel type: {car.fuelType.name}</Text>
                        <Text style={[pageStyles.car_preview_card_text, pageStyles.bold]}>{car.pricePerDay}$ / day</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export {CarCard};