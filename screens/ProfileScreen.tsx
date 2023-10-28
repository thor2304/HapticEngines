import {getDefaultStyleSheet} from "../services/Stylesheet"
import {StyleSheetI} from "../types/StyleSheetTypes";
import {Text, View, Image} from "react-native";
import React, {useState} from "react";
import {ProfileProps} from "./ScreenParams";
import backendHandler from "../services/BackendHandler";
import {getProfileScreenStylesheet} from "../services/ProfileScreenStylesheet";

/**
 * This is the profile screen, which shows information about the user.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : ProfileProps) {
    const userID = 2;
    const pageStyle = getProfileScreenStylesheet()

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

    return (
        <View style={styles.container}>
            <Image
                style={pageStyle.image}
                source={{uri: backendHandler.getImageUrl(user.image)}} />

            <Text style={pageStyle.name}>{user.name}</Text>
            <Text style={pageStyle.details}>{user.email}</Text>
            <Text style={pageStyle.details}>{user.phoneNumber}</Text>
            <Text style={pageStyle.details}>{user.billingAddress}</Text>
        </View>
    );
}
