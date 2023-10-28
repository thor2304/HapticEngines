import {CarSectionListProps} from "../screens/ScreenParams";
import {getCarListStylesheet} from "../services/carListStylesheet";
import {SectionList, Text} from "react-native";
import {CarCard} from "./CarCard";
import React from "react";
import Car from "../types/classes/Car";

export function CarSectionList({params, navigation}: CarSectionListProps){
    const pageStyles = getCarListStylesheet()

    const data = params.data
    const switchAlignment = params.switchAlignment

    return (
        <SectionList
            style={pageStyles.car_list}
            sections={data}
            renderSectionHeader={({section:{title}}) => (
                (title === undefined) ? null : <Text style={pageStyles.car_list_title}>{title}</Text>
            )}
            renderItem={({item, index}) => (
                <CarCard
                    params={
                        {
                            car: (item instanceof Car) ? item : item.car,
                            alignLeft: (switchAlignment ? (index % 2 == 0) : true)
                        }
                    }
                    navigation={navigation}>
                </CarCard>
            )}
        />
    )
}