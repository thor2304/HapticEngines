import React, {useState} from "react";
import {useContext} from "react";
import {BackgroundFetchStatus} from "expo-background-fetch";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {
    BACKGROUND_FETCH_TASK,
    registerBackgroundFetchAsync,
    unregisterBackgroundFetchAsync
} from "../services/notifications/BackgroundTask";
import {getDefaultStyleSheet} from "../services/Stylesheet";
import {ThemeContext} from "./ThemeContext";

export default function BackgroundFetchScreen() {
    const [isRegistered, setIsRegistered] = React.useState(false);
    const theme = useContext(ThemeContext).theme

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

    const defaultStyles = getDefaultStyleSheet().copy()

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
            color: theme.onPrimaryColor,
        }
    });

    defaultStyles.container.flex = 0.5

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
