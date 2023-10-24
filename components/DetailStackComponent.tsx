import React from 'react';

import { Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screens/HomeScreen";
import {ContextExample} from "../screens/ContextExample";
import {CarDetailScreen} from "../screens/CarDetailScreen";

const Stack = createNativeStackNavigator();

type RootStackParamList = {
    Home: undefined;
}

type TestComponentNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const DetailStackComponent = ({ navigation }: { navigation: TestComponentNavigationProp }) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CarDetail" component={CarDetailScreen} />
            </Stack.Navigator>
        </>
    );
}

export {DetailStackComponent};