import {Button, Text, View} from "react-native";
import {useContext} from "react";
import {exampleContext} from "../components/ExampleContext";
import {darkTheme, lightTheme} from "../components/Themes";
import {StyleSheet} from "react-native";


export const ContextExample = () => {
    const context = useContext(exampleContext);

    const changeState = () => {
        context.setState(
            context.theme === darkTheme ? lightTheme : darkTheme
        )
    }

    const stylesheet = StyleSheet.create({
        container: {
            backgroundColor: context.theme.backgroundColor,
            color: context.theme.textColor,
        },
        text: {
            color: context.theme.textColor,
            backgroundColor: context.theme.backgroundColor,
        },
        button: {
            backgroundColor: context.theme.contrastColor,
            color: context.theme.textColor,
        }
    })

    return (
        <View style={stylesheet.container}>
            <Text style={stylesheet.text}>Context Example : {context.theme.textColor}</Text>
            <Button title="Change state"
                    style={stylesheet.button}
                    onPress={changeState}/>
        </View>
    );
}