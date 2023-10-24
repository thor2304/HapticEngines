import React from 'react';

import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
    Home: undefined;
}

type TestComponentNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const TestComponent = ({ navigation }: { navigation: TestComponentNavigationProp }) => {
    return (
        <>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </>
    );
}

export {TestComponent};