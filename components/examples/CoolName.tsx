import {StatusBar} from 'expo-status-bar';
import {Button, Text, View} from 'react-native';
import {useState} from "react";
import {StyleSheetI} from "../../types/StyleSheetTypes";

interface ChildViewProps {
    name: string;
    description: string;
    styleSheet: StyleSheetI;
}

const ChildView = (props: ChildViewProps) => {
    const [counter, incrementCounter] = useState(0)
    const increment = () => {
        incrementCounter(counter + 1)
    }


    return (
        <View>
            <Text style={props.styleSheet.text}>Counter: {counter}</Text>
            <Button
                title="Increment"
                // style={props.styleSheet.button}
                onPress={increment}/>
            <StatusBar style="auto"/>
        </View>
    );
}

export {ChildView};