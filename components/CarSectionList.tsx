import {CarSectionListProps} from "../screens/ScreenParams";
import {getCarListStylesheet} from "../services/carListStylesheet";
import {SectionList, Text} from "react-native";
import {CarCard} from "./CarCard";
import React from "react";

export function CarSectionList({params, navigation}: CarSectionListProps){
    const pageStyles = getCarListStylesheet()

    const data = params.data

    return (
        <SectionList
            style={pageStyles.car_list}
            sections={data}
            renderSectionHeader={({section: {title}}) => (
                <Text style={pageStyles.car_list_title}>{title}</Text>
            )}
            renderItem={({item}) => (
                <CarCard
                    params={
                        {
                            car: item.car,
                            alignLeft: true
                        }
                    }
                    navigation={navigation}>
                </CarCard>
            )}
        />
    )
}