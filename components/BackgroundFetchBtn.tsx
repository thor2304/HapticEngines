import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { BackgroundFetchStatus } from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { BACKGROUND_FETCH_TASK, unregisterBackgroundFetchAsync, registerBackgroundFetchAsync } from '../services/notifications/BackgroundTask';



export default function BackgroundFetchScreen() {
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [status, setStatus] = React.useState(null);

    React.useEffect(() => {
        checkStatusAsync().then(r => r);

    }, []);

    const [fetchStatus, setFetchStatus] = useState<BackgroundFetchStatus | null>(null);

    const checkStatusAsync = async () => {

        const status = await BackgroundFetch.getStatusAsync();
        const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_FETCH_TASK);
        setFetchStatus(status);
        setIsRegistered(isRegistered);
    };

    const toggleFetchTask = async () => {
        if (isRegistered) {
            await unregisterBackgroundFetchAsync();
        } else {
            await registerBackgroundFetchAsync();
        }

        await checkStatusAsync();
    };

    return (
        <View style={styles.screen}>
            <View style={styles.textContainer}>
                <Text>
                    Background fetch status:{' '}
                    <Text style={styles.boldText}>
                        {status && BackgroundFetch.BackgroundFetchStatus[status]}
                    </Text>
                </Text>
                <Text>
                    Background fetch task name:{' '}
                    <Text style={styles.boldText}>
                        {isRegistered ? BACKGROUND_FETCH_TASK : 'Not registered yet!'}
                    </Text>
                </Text>
            </View>
            <View style={styles.textContainer}></View>
            <Button
                title={isRegistered ? 'Unregister BackgroundFetch task' : 'Register BackgroundFetch task'}
                onPress={toggleFetchTask} />
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
