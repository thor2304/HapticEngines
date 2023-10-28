import React, {useState} from 'react';
import {View} from 'react-native';
import {MyRentalsProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {getDefaultStyleSheet} from "../services/Stylesheet";
import {CarSectionList} from "../components/CarSectionList";

export function MyRentals({route, navigation}: MyRentalsProps){
    const pageStyles= getDefaultStyleSheet()

    const allRentalsByUser: Backend.RentalCollection = []

    let [data, setData] = useState(allRentalsByUser);

    backendHandler.getRentalsByUser(1).then((rentals) => {
        if(rentals === undefined) return
        setData(rentals)
    }).catch((error) => {
        console.log(error)
    });

    const currentRentalsByUser: Backend.RentalCollection = [];
    const pastRentalsByUser: Backend.RentalCollection = [];

    let currentDay = new Date()
    for(const rental of data){
        let rentalEndDate = new Date(rental.endDate)

        if(currentDay.getTime() > rentalEndDate.getTime()) {
            pastRentalsByUser.push(rental)
        } else {
            currentRentalsByUser.push(rental)
        }
    }

    let viewData = [
        {
            title: 'Current Rentals',
            data: currentRentalsByUser.sort((a,b) => a.startDate > b.startDate ? -1 : 1)
        },
        {
            title: 'Past Rentals',
            data: pastRentalsByUser.sort((a,b) => a.endDate > b.endDate ? -1 : 1)
        }
    ]

    return (
        <View style={pageStyles.background}>
            <CarSectionList
                params={
                    {
                        data: viewData,
                        switchAlignment: false
                    }
                }
                navigation={navigation}
            />
        </View>
    );
}
