import React, {useState} from 'react';
import {View} from 'react-native';
import {CarSectionListParams, MyRentalsProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {getDefaultStyleSheet} from "../services/Stylesheet";
import {CarSectionList} from "../components/CarSectionList";

export function MyRentals({route, navigation}: MyRentalsProps) {
    const pageStyles = getDefaultStyleSheet()

    const allRentalsByUser: Backend.RentalCollection = []

    let [data, setData] = useState(allRentalsByUser);

    let userId = 1

    backendHandler.getRentalsByUser(userId).then((rentals) => {
        if (rentals === undefined) {
            return
        }
        setData(rentals)
    }).catch((error) => {
        console.log(error)
    });

    const currentRentals: Backend.RentalCollection = [];
    const pastRentals: Backend.RentalCollection = [];

    let currentDay = new Date()
    for (const rental of data) {
        let rentalEndDate = new Date(rental.endDate)

        if (currentDay.getTime() > rentalEndDate.getTime()) {
            pastRentals.push(rental)
        } else {
            currentRentals.push(rental)
        }
    }

    let viewData: CarSectionListParams = {
        sections: [
            {
                title: 'Current Rentals',
                data: currentRentals.sort((a, b) => a.startDate > b.startDate ? -1 : 1)
                    .map((r) => r.car)
            },
            {
                title: 'Past Rentals',
                data: pastRentals.sort((a, b) => a.endDate > b.endDate ? -1 : 1)
                    .map((r) => r.car)
            }
        ],
        switchAlignment: false
    }

    return (
        <View style={pageStyles.background}>
            <CarSectionList
                params={viewData}
                navigation={navigation}
            />
        </View>
    );
}
