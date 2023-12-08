import {useState, useEffect, useRef} from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import {Platform} from "react-native";

export interface PushNotificationstate {
    expoPushToken: Notifications.ExpoPushToken | undefined;
}

export function PushNotifications(): PushNotificationstate {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    const [expoPushToken, setExpoPushToken] = useState<Notifications.ExpoPushToken | undefined>();

    async function registerForPushNotificationsAsync() {
        let token;
        if (Device.isDevice) {
            const {status: existingStatus} = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;

            if (existingStatus !== "granted") {
                const {status} = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== "granted") {
                alert("Failed to get push token for push notification!");
                return;
            }
            /**
             * Expo constants is information that remains constant.
             Project id is pulled from App.JSON "expo"
             and should always be precent as we are using expo libraries.
             https://docs.expo.dev/versions/latest/sdk/constants/
             */
            token = await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig?.extra?.eas.projectId,
            });
        } else {
            alert("Physical device is needed for push noti");
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
            });
        }
        return token;
    }

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then((token) => {
                setExpoPushToken(token)
            })
    }, []);

    return {
        expoPushToken,
    }
}
