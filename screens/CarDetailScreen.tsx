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
        }
    });

    const car: Backend.Car = route.params.car;
    const alignLeft = route.params.alignLeft

    const viewStyles = getDetailStylesheet()

    const defaultStyleSheet = getDefaultStyleSheet();

    return (
        <View style={pageStyles.background}>
            <Text style={defaultStyleSheet.text}>    {car.model} </Text>
            <DetailList params={{
                data:[car],
                switchAlignment: true
            }} navigation={
                navigation
            }>
            </DetailList>
            <View style={alignLeft ? viewStyles.row : viewStyles.reverse_row}>
                <View style={viewStyles.detail_preview_card_text_box}>
                    <Text style={viewStyles.detail_preview_card_text}>Rumble</Text>
                </View>
                <View style={viewStyles.detail_preview_card_text_box}>
                    <Text style={viewStyles.detail_preview_card_text}>{car.engineCCSize}</Text>
                    <Text style={viewStyles.detail_preview_card_text}>Doors: {car.doors}</Text>
                    <Text style={viewStyles.detail_preview_card_text}>Fuel type: {car.fuelType.name}</Text>
                    <Text style={viewStyles.detail_preview_card_text}>Wheel size: {car.wheelSize}</Text>
                </View>
            </View>
            <View style={alignLeft ? viewStyles.row : viewStyles.reverse_row}>
                <View style={viewStyles.detail_preview_card_text_box}>
                    <Text style={[viewStyles.detail_preview_card_text]}>Description</Text>
                    <Text style={viewStyles.detail_preview_card_text}>{car.description}</Text>
                </View>
                <View style={viewStyles.detail_preview_card_text_box}>
                    <Text style={viewStyles.detail_preview_card_text}>Pricing</Text>
                    <Text style={viewStyles.detail_preview_card_text}>{car.pricePerDay} / Day</Text>
                    <Text style={viewStyles.detail_preview_card_text}>{car.pricePerWeek} / Week</Text>
                </View>
            </View>
            <View style={viewStyles.detail_button}>
                <Button title={"Rent car"}></Button>
            </View>
        </View>
    );
}
