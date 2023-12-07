import React, {useContext} from "react";
import {Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import {ThemeContext} from "./ThemeContext";

export function CustomSafeAreaView({ children } : { children: React.ReactNode }) {
    const statusBarHeight = (StatusBar.currentHeight == undefined ? 0 : StatusBar.currentHeight)

    const theme = useContext(ThemeContext)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? ( statusBarHeight + 2 ) : 0,
            backgroundColor: theme.theme.backgroundColor
        },
        tabBar: {
            backgroundColor: theme.theme.backgroundColor
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}