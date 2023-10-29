import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BackgroundFetchStatus } from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackendHandler from '../BackendHandler';

const BACKGROUND_FETCH_TASK = 'background-fetch';
const expoProjectID = '85585586-7779-45d0-a2d2-e8acc246ea7b';
const emptyResponse = "no response from server"
const emptyLocal = "no hash saved local"

const carHashStorageKey = "carHash"

// unit is seconds, every 6 seconds (but can not go lower than 1 minute)
const fetchInterval = 60 * 0.1;


async function getSavedHash(): Promise<string> {
    // get saved hash
    // if no hash saved return a default string
    const local = await AsyncStorage.getItem(carHashStorageKey);

    return local == null ? emptyLocal : local
}

async function fetchCarHash(): Promise<string> {
    // Call getCarHash and await its result
    const carHash = await BackendHandler.getCarHash();

    return carHash == undefined ? emptyResponse : carHash
}

async function saveCarHash(hash: string): Promise<void> {
    await AsyncStorage.setItem(carHashStorageKey, hash)
}


async function getAndSaveCarHash(): Promise<void> {
    // fetch the hash
    const hash = await fetchCarHash()
    // save the hash
    await saveCarHash(hash)
}

/**
 * @return boolean true if hashes are equal false if different
 */
function compareHashes(hashFromServer: string, hashFromLocal: string): boolean {
    // Compare the hash from the server with the one saved locally (getSavedHash)
    // If they are different, return false

    if (hashFromLocal === emptyLocal) {
        saveCarHash(hashFromServer).then(r => r)
        return true
    }

    return hashFromServer === hashFromLocal
}

async function sendNotification(): Promise<void> {
    console.log("Sending notification")
    const now = Date.now();

    const expoPushToken = await getExpoToken()
    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "to": expoPushToken.data,
            "title": "Background Fetch test",
            "body": "Background fetch call at date: " + new Date(now).toString(),
            "priority": "high"
        }),
    });
}

async function getExpoToken() {
    return await Notifications.getExpoPushTokenAsync({
        projectId: expoProjectID,
    });
}

async function backgroundTask() {

    console.log("Background task started")

    const carHashFromServer = await fetchCarHash();
    console.log("Car hash from server: " + carHashFromServer)

    const localHash = await getSavedHash()
    console.log("value from local: " + localHash)


    if (compareHashes(carHashFromServer, localHash)) {
        // early return as guard clause
        return
    }

    // There is a new hash from the server, send a notification
    await sendNotification()
    // And save the new carhash to avoid notification spams
    await saveCarHash(carHashFromServer)

    return BackgroundFetch.BackgroundFetchResult.NewData;
}

// Define the task with the system.
TaskManager.defineTask(BACKGROUND_FETCH_TASK, backgroundTask);

async function registerBackgroundFetchAsync() {
    await getAndSaveCarHash()
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: fetchInterval,
        stopOnTerminate: true,
        startOnBoot: true,
    });
}

async function unregisterBackgroundFetchAsync() {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}


export default function BackgroundFetchScreen() {
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [status, setStatus] = React.useState(null);

    React.useEffect(() => {
        checkStatusAsync().then(r => r)

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
                onPress={toggleFetchTask}
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