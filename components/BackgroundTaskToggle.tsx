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

    const defaultStyles = getDefaultStyleSheet()

    const customStyles = StyleSheet.create({
        textContainer: {
            // margin: 5,
            padding: 5,
        },
        boldText: {
            fontWeight: 'bold',
        },
        button: {
            borderRadius: 8,
            padding: 6,
        },
        buttonText: {
            color: defaultStyles.text.color,
        }
    });

    return (
        <View style={defaultStyles.container}>
            <Text style={customStyles.textContainer}>
                <Text style={defaultStyles.text}>
                    Background fetch status:{' '}
                    <Text style={customStyles.boldText}>
                        {fetchStatus && BackgroundFetch.BackgroundFetchStatus[fetchStatus]}
                    </Text>
                </Text>
            </Text>
            <Text style={customStyles.textContainer}>
                <Text style={defaultStyles.text}>
                    Background fetch task name:{' '}
                    <Text style={customStyles.boldText}>
                        {isRegistered ? BACKGROUND_FETCH_TASK : 'Not registered yet!'}
                    </Text>
                </Text>
            </Text>
            <View style={customStyles.textContainer}>
                <Pressable
                    title={isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}
                    onPress={toggleFetchTask}
                    style={defaultStyles.button}
                />
                <Pressable
                    onPress={toggleFetchTask}
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? defaultStyles.button.color : defaultStyles.button.backgroundColor,
                        },
                        customStyles.button,
                    ]}>
                    <Text style={customStyles.buttonText}>{isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}</Text>
                </Pressable>
            </View>
        </View>
    );
}
