import {Discovery} from "./Discovery";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ContextExample} from "./ContextExample";
import {MyRentals} from "./MyRentals";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Discovery" component={Discovery} options={{headerShown: false}} />
            <Tab.Screen name="MyRentals" component={MyRentals} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={ContextExample} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}

