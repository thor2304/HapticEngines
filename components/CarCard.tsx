import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import backendHandler from "../services/BackendHandler";
import {CarCardPropsForReal} from "../screens/ScreenParams";

function CarCard({params, navigation}: CarCardPropsForReal ){
    const car = params.car
    const alignLeft = params.alignLeft

    return (
        <TouchableOpacity
            onPress={() => {
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
                        <Text>{car.model}</Text>
                        <Text>Doors: {car.doors}</Text>
                        <Text>Fuel type: {car.fuelType.name}</Text>
                        <Text style={pageStyles.bold}>{car.pricePerDay}$ / day</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export {CarCard};

const pageStyles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    reverse_row: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingRight: 15,
    },
    car_preview_card: {
        minHeight: 150,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: '#F0F6F6',
        padding: 7,
    },
    car_preview_card_image_box: {
        flex: 0.6,
    },
    car_preview_card_text_box: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 0.38,
        Height: 150,
    },
    car_image: {
        height: 150,
        borderRadius: 25,
    }
});