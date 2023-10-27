import {getDefaultStyleSheet} from "../components/Stylesheet"
import {StyleSheetI} from "../components/types/StyleSheetTypes";
import {Text, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import {DiscoveryProps} from "./ScreenParams";
import backendHandler from "../components/BackendHandler";

/**
 * This is the profile screen, which shows information about the user.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : DiscoveryProps) {

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet();


    const allUsers: Backend.UserCollection = [];
    let [data, setData] = useState(allUsers);

    backendHandler.getUsers()
        .then(myData => {
            setData(myData)
            console.log(data)
        }).catch((e) => {
        console.log(e)
        console.log("caught error")
    });

    return (
        <View style={styles.container}>
            {/*<Image*/}
            {/*    style={cStyle.image}*/}
            {/*    source={require('add image path here')} />*/}

            // View created to be able to add edit icon besides name in the future.
            <View>
                <Text style={cStyle.name}>{item.name}</Text>
            </View>
            <Text style={cStyle.info}>{item.email}</Text>
            <Text style={cStyle.info}>{item.phoneNumber}</Text>
            <Text style={cStyle.info}>{item.billingAddress}</Text>
        </View>
    );
}

const cStyle = StyleSheet.create({
    name: {
        fontFamily: 'Inter',
        fontSize: 32,
        fontWeight: '700'
    },
    info: {
        fontFamily: 'Inter',
        fontSize: 26,
        fontWeight: '700',
        color: '#BFBFBF'
    },
    image: {
        width: 128,
        height: 128
    }
});
