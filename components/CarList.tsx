import {CarListProps} from "../screens/ScreenParams";
import {CarCard} from "./CarCard";
import {FlatList} from "react-native";
import React from "react";
import {getCarListStylesheet} from "../services/carListStylesheet";

export function CarList({params, navigation}: CarListProps){
    const pageStyles = getCarListStylesheet()

    const data = params.data
    const switchAlignment = params.switchAlignment

    return (
        <FlatList
            data={data}
            style={pageStyles.car_list}
            renderItem={({item, index}) =>
                <CarCard
                    params={
                        {
                            car: item,
                            alignLeft: (switchAlignment ? (index % 2 == 0) : true)
                        }
                    }
                    navigation={navigation}
                />
            }
        />
    )
}