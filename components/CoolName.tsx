import { Text, View } from 'react-native';

interface ChildViewProps {
    name: string;
    description: string;
}

const ChildView = (props: ChildViewProps) => {
    return (
        <View>
            <Text>Hello {props.name}!</Text>
            <Text>You are {props.description}</Text>
        </View>
    );
}

export {ChildView};