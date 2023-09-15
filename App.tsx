import {StyleSheet} from "react-native";
import {View} from "react-native";
import {ChildView} from "./components/CoolName";
import {ContextExample} from "./components/ContextExample";

export default function App() {
    return (
        <View style={styles.container}>
            <ChildView name={"He"} description={"He"}></ChildView>
            <ContextExample></ContextExample>
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
