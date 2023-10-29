import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BackgroundFetchStatus } from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackendHandler from '../services/BackendHandler';


const BACKGROUND_FETCH_TASK = 'background-fetch';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {

  const now = Date.now();
        const expoPushToken = await Notifications.getExpoPushTokenAsync({
          projectId: "85585586-7779-45d0-a2d2-e8acc246ea7b",
        });
      
        const [carHash, setCarHash] = useState<string | null>(null);
        BackendHandler.getCarHash().then((value) => { 
          setCarHash(value || "null")
          console.log(value + " from getCarHash");
          return value
        });
        
        //   // Call getCarHash and await its result
        //   const carHash = await BackendHandler.getCarHash();
      
        //   if (carHash) {
        //     console.log("Car Hash from getCarHash:", carHash);
        //     // Now you can use the carHash as needed
        //   } else {
        //     console.log("Failed to fetch car hash.");
        //   }
      
        //   AsyncStorage.getItem('carHash').then((value) => {
        //     console.log(value + " from LOCAL");
        //   });
      
          fetch('https://exp.host/--/api/v2/push/send', {
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
      
          console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
      

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60 * 0.1, // 15 minutes
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
    checkStatusAsync();
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

    checkStatusAsync();
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