import {StatusBar} from 'expo-status-bar';
import {Button, Text, View} from 'react-native';
import {useState} from "react";

interface ChildViewProps {
    name: string;
    description: string;
}

const ChildView = (props: ChildViewProps) => {
    const [counter, incrementCounter] = useState(0)
    const increment = () => {
        incrementCounter(counter + 1)
    }

    return (
        <View>
            <Text>Counter: {counter}</Text>
            <Button
                title="Increment"
                color="#3081d3"
                onPress={increment}/>
            <StatusBar style="auto"/>
        </View>
    );
}

export {ChildView};