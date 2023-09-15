import {Button, Text, View} from "react-native";


export const ContextExample = () => {
    const changeState = () => {
        alert("hello")
    }

    return (
        <View>
            <Text>Context Example</Text>
            <Button title="Change state"
                    color="#3081d3"
                    onPress={changeState}/>
        </View>
    );
}