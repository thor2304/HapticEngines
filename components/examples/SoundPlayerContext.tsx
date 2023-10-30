import React, { createContext, useContext, useState, useEffect } from 'react';
import {Audio, AVPlaybackStatus, AVPlaybackStatusSuccess} from 'expo-av';


export const SoundPlayerContext = createContext({playSound: async (soundfile: any) =>{}});

export function SoundPlayerProvider({ children } : { children: React.ReactNode }) {
    const [sound, setSound] = useState<Audio.Sound>();

    const playSound = async (soundFile: any) => {
        try {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(soundFile);
            setSound(sound);

            console.log('Playing Sound');
            await sound.playAsync();
        } catch (error) {
            console.error('Error playing sound', error);
        }
    };

    useEffect(() => {
        let isMounted = true;

        if (sound && isMounted) {
            const unloadSoundAsync = async () => {
                console.log('Unloading Sound');
                await sound.unloadAsync();
            };

            sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
                if (Object.keys(status).includes('didJustFinish')) {
                    const myStatus = status as AVPlaybackStatusSuccess;

                    if (myStatus.didJustFinish) {
                        unloadSoundAsync().then(r =>{} );
                    }
                }
            });
        }

        return () => {
            isMounted = false;
        };
    }, [sound]);


    return (
        <SoundPlayerContext.Provider value={{ playSound }}>
            {children}
        </SoundPlayerContext.Provider>
    );
}

export function useSoundPlayer() {
    return useContext(SoundPlayerContext);
}
