import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import backendHandler from "../services/BackendHandler";
import {CarCardPropsForReal} from "../screens/ScreenParams";
import {getDetailStylesheet} from "../services/DetailStyleSheet";
import {playHapticFeedbackMultipleTimes} from "../services/HapticFeedback";

function DetailCard({params, navigation}: CarCardPropsForReal ){
    const car = params.car
    const alignLeft = params.alignLeft

    const pageStyles = getDetailStylesheet()

    return (
        <TouchableOpacity
            onPress={() => {

            }}
        >
            <View style={pageStyles.detail_preview_card_image_box}>
                <Image
                    style={pageStyles.detail_image}
                    source={{
                        uri: backendHandler.getImageUrl(car.imageName),
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}

export {DetailCard};