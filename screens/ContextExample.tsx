import {Button, Text, View, StyleSheet} from "react-native";
import {useContext} from "react";
import {ThemeContext} from "../components/ThemeContext";
import {darkTheme, lightTheme} from "../components/Themes";


export const ContextExample = () => {
    const context = useContext(ThemeContext);

    function changeState() {
        context.setTheme(context.theme === darkTheme ? lightTheme : darkTheme)

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
            <Text style={stylesheet.text}>Context Example : {context.theme.textColor.toString()}</Text>
            <Button title="Change state"
                    // style={stylesheet.button}
                    onPress={changeState}/>
        </View>
    );
}