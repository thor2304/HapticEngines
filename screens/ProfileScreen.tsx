import {getDefaultStyleSheet} from "../services/Stylesheet"
import {StyleSheetI} from "../types/StyleSheetTypes";
import {Text, View, StyleSheet, Image} from "react-native";
import React, {useContext, useState} from "react";
import {DiscoveryProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {ThemeContext} from "../components/ThemeContext";

/**
 * This is the profile screen, which shows information about the user.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : DiscoveryProps) {
    const userID = 2;
    const context = useContext(ThemeContext);

    // Stylesheet used is the interface from ColorPalette.tsx
    const styles: StyleSheetI = getDefaultStyleSheet();

    let [user, setUser] = useState<Backend.User>({
        id: 0,
        name: "Name unavailable",
        email: "Email unavailable",
        phoneNumber: "Phone number unavailable",
        billingAddress: "Billing address unavailable",
        image: "404_img.png",
    });

    backendHandler.getUser(userID).then((user) => {
        if (user == undefined){
            return
        }
        setUser(user)
    }).catch((error) => {
        console.log(error)
    })


    // View created to be able to add edit icon besides name in the future.
    // TODO: Add functionality to allow users to edit their information.

    return (
        <View style={styles.container}>
            <Image
                style={cStyle.image}
                source={{uri: backendHandler.getImageUrl(user.image)}} />

            <View>
                <Text style={cStyle.name}>{user.name}</Text>
            </View>
            <Text style={cStyle.info}>{user.email}</Text>
            <Text style={cStyle.info}>{user.phoneNumber}</Text>
            <Text style={cStyle.info}>{user.billingAddress}</Text>
        </View>
    );
}

const cStyle = StyleSheet.create ({
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
