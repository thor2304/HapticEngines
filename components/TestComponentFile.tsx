import React from 'react';

import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import BackgroundTask from './BackgroundTask';


type RootStackParamList = {
    Home: undefined;
}

type TestComponentNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const TestComponent = ({ navigation }: { navigation: TestComponentNavigationProp }) => {
    return (
        <>
        <BackgroundTask></BackgroundTask>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </>
    );
}

export {TestComponent};