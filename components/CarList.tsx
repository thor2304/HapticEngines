import {CarListProps} from "../screens/ScreenParams";
import {CarCard} from "./CarCard";
import {FlatList, StyleSheet} from "react-native";
import React from "react";

export function CarList({params, navigation}: CarListProps){
    const data = params.data
    const switchAlignment = params.switchAlignment

    return (
        <FlatList data={data}
                  style={pageStyles.car_preview_list}
                  renderItem={({item, index}) =>
                      <CarCard
                          params={
                              {
                                  car: item,
                                  alignLeft: (switchAlignment ? (index % 2 == 0) : true)
                              }
                          }
                          navigation={navigation}>
                      </CarCard>
                  }
        />
    )
}

const pageStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    car_preview_list: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        maxHeight: window.innerHeight,
    }
});