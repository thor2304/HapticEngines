import {CarListProps} from "../screens/ScreenParams";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import backendHandler from "../services/BackendHandler";
import {getDetailStylesheet} from "../services/DetailStyleSheet";

export function DetailList({params, navigation}: CarListProps){
    const data = params.data
    const switchAlignment = params.switchAlignment

    const pageStyles = getDetailStylesheet()

    return (
        <FlatList data={data}
                  style={{borderWidth:5}}
                  renderItem={({item, index}) =>
                      <Image
                          style={pageStyles.detail_image}
                          source={{
                              uri: backendHandler.getImageUrl(item.imageName),
                          }}
                      />
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