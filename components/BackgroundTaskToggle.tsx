import React, {useState} from "react";
import {BackgroundFetchStatus} from "expo-background-fetch";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {
    BACKGROUND_FETCH_TASK,
    registerBackgroundFetchAsync,
    unregisterBackgroundFetchAsync
} from "../services/notifications/BackgroundTask";
import {getDefaultStyleSheet} from "../services/Stylesheet";

export default function BackgroundFetchScreen() {
    console.log("BackgroundFetchScreen")
    const [isRegistered, setIsRegistered] = React.useState(false);

    React.useEffect(() => {
        updateStatusVariables().then(r => r)
    }, []);

    const [fetchStatus, setFetchStatus] = useState<BackgroundFetchStatus | null>(null);

    const updateStatusVariables = async () => {
        setFetchStatus(await BackgroundFetch.getStatusAsync());
        setIsRegistered(await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK));
    };

    const toggleFetchTask = async () => {
        if (isRegistered) {
            await unregisterBackgroundFetchAsync();
        } else {
            await registerBackgroundFetchAsync();
        }

        await updateStatusVariables();
    };

    const stylesTwo = getDefaultStyleSheet()

    return (
        <View style={stylesTwo.container}>
            <View style={styles.textContainer}>
                <Text style={stylesTwo.text}>
                    Background fetch status:{' '}
                    <Text style={styles.boldText}>
                        {fetchStatus && BackgroundFetch.BackgroundFetchStatus[fetchStatus]}
                    </Text>
                </Text>
                <Text style={stylesTwo.text}>
                    Background fetch task name:{' '}
                    <Text style={styles.boldText}>
                        {isRegistered ? BACKGROUND_FETCH_TASK : 'Not registered yet!'}
                    </Text>
                </Text>
            </View>
            <View style={styles.textContainer}></View>
            <Pressable
                title={isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}
                onPress={toggleFetchTask}
                style={stylesTwo.button}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        margin: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
});