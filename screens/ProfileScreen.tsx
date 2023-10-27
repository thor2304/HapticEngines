import {getDefaultStyleSheet} from "../services/Stylesheet"
import {StyleSheetI} from "../types/StyleSheetTypes";
import {Text, View, StyleSheet} from "react-native";
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

    let [data, setData] = useState<Backend.User>({
        id: 0,
        name: "Name unavailable",
        email: "Email unavailable",
        phoneNumber: "Phone number unavailable",
        billingAddress: "Billing address unavailable"
    });

    backendHandler.getUser(userID).then((user) => {
        setData(user)
    }).catch((error) => {
        console.log(error)
    })

    return (
        <View style={styles.container}>
            <Image
                style={cStyle.image}
                source={{uri: backendHandler.getImageUrl('Chad_Payne')}} />

            // View created to be able to add edit icon besides name in the future.
            // TODO: Add functionality to allow users to edit their information.
            <View>
                <Text style={cStyle.name}>{data.name} : {context.theme.textColor.toString()}</Text>
            </View>
            <Text style={cStyle.info}>{data.email} : {context.theme.textColor.toString()}</Text>
            <Text style={cStyle.info}>{data.phoneNumber} : {context.theme.textColor.toString()}</Text>
            <Text style={cStyle.info}>{data.billingAddress} : {context.theme.textColor.toString()}</Text>
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
