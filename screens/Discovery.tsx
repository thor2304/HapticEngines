import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import React, {useState} from "react";
import {DiscoveryProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";


/**
 * This is the primary screen, showing all the cars
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function Discovery({route, navigation}: DiscoveryProps) {

    // const allCars = await BackendHandler.getCars();
    const allCars: Backend.CarCollection = []


    let [data, setData] = useState(allCars);

    backendHandler.getCars().then((cars) => {
        setData(cars)
    }).catch((error) => {
        console.log(error)
    })

    return (
        <View style={pageStyles.car_preview_container}>
            <FlatList data={data}
                      renderItem={({item, index}) =>
                          <TouchableOpacity
                              onPress={() => {
                                  /* 1. Navigate to the Details route with params */
                                  navigation.navigate('CarDetailsScreen', {
                                      car: item,
                                  });
                              }}
                          >
                              <View style={pageStyles.car_preview_card}>
                                  <View style={index % 2 === 0 ? pageStyles.row : pageStyles.reverse_row}>
                                      <View style={pageStyles.car_preview_card_image_box}>
                                          <Image
                                              style={pageStyles.car_image}
                                              source={{
                                                  uri: backendHandler.getImageUrl(item.imageName),
                                              }}
                                          />
                                      </View>
                                      <View style={pageStyles.car_preview_card_text_box}>
                                          <Text>{item.model}</Text>
                                          <Text>Doors: {item.doors}</Text>
                                          <Text>Fuel type: {item.fuelType.name}</Text>
                                          <Text style={pageStyles.bold}>{item.pricePerDay}$ / day</Text>
                                      </View>
                                  </View>
                              </View>
                          </TouchableOpacity>
                      }
            />
        </View>
    );
}

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
    car_preview_container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#FFF',
    },
    car_preview_card: {
        minHeight: 150,
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'space-between',
        marginTop: 25,
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