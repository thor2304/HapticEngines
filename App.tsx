import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ChildView} from './components/CoolName';
import {useState} from "react";

export default function App() {
    const [counter, incrementCounter] = useState(0)
    const increment = () => {
        incrementCounter(counter + 1)
    }

    return (
        <View style={styles.container}>
            <Text>Counter: {counter}</Text>
            <Button
                title="Increment"
                color="#3081d3"
                onPress={increment}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
