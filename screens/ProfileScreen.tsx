import React, {useContext, useState} from "react";
import {Text, View, Image, Pressable} from "react-native";
import backendHandler from "../services/BackendHandler";
import {ProfileProps} from "./ScreenParams";
import {StyleSheetI} from "../types/StyleSheetTypes";
import {getDefaultStyleSheet} from "../services/Stylesheet"
import {getProfileScreenStyleSheet} from "../services/ProfileScreenStyleSheet";
import {darkTheme, lightTheme} from "../components/Themes";
import {ThemeContext} from "../components/ThemeContext";
import UserContext from "../components/UserContext";

/**
 * This is the profile screen, which shows information about the user.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation} : ProfileProps) {
    const pageStyles = getProfileScreenStyleSheet();
    // TODO: Har tilføjet en værdi der henter context fra UserContext og ændret backendhandleren's givede værdi til at bruge den i stedet for.
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);
    const styles: StyleSheetI = getDefaultStyleSheet();

    const [buttonText, setButtonText] = useState("Dark theme");

    function changeState() {
        themeContext.setTheme(themeContext.theme === darkTheme ? lightTheme : darkTheme)
        if (themeContext.theme === lightTheme) {
            setButtonText("Light theme")
        }
        if (themeContext.theme === darkTheme) {
            setButtonText("Dark theme")
        }
    }

    let [user, setUser] = useState<Backend.User>({
        id: 0,
        name: "Name unavailable",
        email: "Email unavailable",
        phoneNumber: "Phone number unavailable",
        billingAddress: "Billing address unavailable",
        image: "404_img.png",
    })

    backendHandler.getUser(userContext).then((user) => {
        if (user == undefined){
            return
        }
        setUser(user)
    }).catch((error) => {
        console.log(error)
    })

    return (
        <View style={styles.container}>
            <Pressable style={pageStyles.button} onPress={changeState}>
                <Text style={pageStyles.details}>{buttonText}</Text>
            </Pressable>
            <View style={pageStyles.backgroundCard}>
                <Image
                    style={pageStyles.image}
                    source={{uri: backendHandler.getImageUrl(user.image)}}/>
                <Text style={pageStyles.name}>{user.name}</Text>
                <View style={pageStyles.detailsGroup}>
                    <Text style={pageStyles.details}>{user.email}</Text>
                    <Text style={pageStyles.details}>{user.phoneNumber}</Text>
                    <Text style={pageStyles.details}>{user.billingAddress}</Text>
                </View>
            </View>
        </View>
    )
}
