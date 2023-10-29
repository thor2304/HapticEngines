import {CarListProps} from "../screens/ScreenParams";
import {DetailCard} from "./DetailCard";
import {FlatList, StyleSheet} from "react-native";
import React from "react";

export function DetailList({params, navigation}: CarListProps){
    const data = params.data
    const switchAlignment = params.switchAlignment

    return (
        <FlatList data={data}
                  style={pageStyles.car_preview_list}
                  renderItem={({item, index}) =>
                      <DetailCard
                          params={
                              {
                                  car: item,
                                  alignLeft: (switchAlignment ? (index % 2 == 0) : true)
                              }
                          }
                          navigation={navigation}>
                      </DetailCard>
                  }
        />
    )
}

const pageStyles = StyleSheet.create({
    car_preview_list: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
    }
});