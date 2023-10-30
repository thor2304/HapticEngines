import React, {useContext, useState} from "react";
import {Text, View, Image, Pressable} from "react-native";
import backendHandler from "../services/BackendHandler";
import {ProfileProps} from "./ScreenParams";
import {StyleSheetI} from "../types/StyleSheetTypes";
import {getDefaultStyleSheet} from "../services/Stylesheet"
import {getProfileScreenStyleSheet} from "../services/ProfileScreenStyleSheet";
import {darkTheme, lightTheme} from "../components/Themes";
import {ThemeContext} from "../components/ThemeContext";
import {defaultUser, UserContext} from "../components/UserContext";

/**
 * This is the profile screen, which shows information about the user.
 * @param route The parameters passed to this screen
 * @param navigation The navigation object passed to this screen, used to navigate to other screens
 */
export function ProfileScreen({route, navigation}: ProfileProps) {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    const pageStyles = getProfileScreenStyleSheet();
    const styles: StyleSheetI = getDefaultStyleSheet();

    const [buttonText, setButtonText] = useState("Dark theme");

    function changeTheme() {
        themeContext.setTheme(themeContext.theme === darkTheme ? lightTheme : darkTheme)
        if (themeContext.theme === lightTheme) {
            setButtonText("Light theme")
        }
        if (themeContext.theme === darkTheme) {
            setButtonText("Dark theme")
        }
    }

    const [userId, setUserId] = useState(defaultUser.id)

    backendHandler.getUser(userId).then((user) => {
        if (user == undefined) {
            user = defaultUser
        }
        userContext.setUser(user)
    }).catch((error) => {
        console.warn(error)
    })

    function changeUser() {
        if (userContext.user.id === 1) {
            setUserId(2)
        } else {
            setUserId(1)
        }
    }

    return (
        <View style={styles.container}>
            <Pressable style={pageStyles.button} onPress={changeTheme}>
                <Text style={pageStyles.details}>{buttonText}</Text>
            </Pressable>
            <View style={pageStyles.backgroundCard}>
                <Image
                    style={pageStyles.image}
                    source={{uri: backendHandler.getImageUrl(userContext.user.image)}}/>
                <Text style={pageStyles.name}>{userContext.user.name}</Text>
                <View style={pageStyles.detailsGroup}>
                    <Text style={pageStyles.details}>{userContext.user.email}</Text>
                    <Text style={pageStyles.details}>{userContext.user.phoneNumber}</Text>
                    <Text style={pageStyles.details}>{userContext.user.billingAddress}</Text>
                </View>
            </View>
            <Pressable style={pageStyles.button} onPress={changeUser}>
                <Text style={pageStyles.details}>Switch user</Text>
            </Pressable>
        </View>
    )
}
