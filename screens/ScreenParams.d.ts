import {NativeStackScreenProps} from "@react-navigation/native-stack";

type DiscoveryParams = undefined;
type RentalParams = undefined;
type ProfileParams = {userId: number};
type CarDetailParams = { itemId: number, otherParam: string };

// This type is used to define the parameters passed to the CarDetailsScreen and the DiscoveryScreen
type NavigatorParamList = {
    CarDetailsScreen: CarDetailParams;
    DiscoveryScreen: DiscoveryParams;
    MyRentalsScreen: RentalParams;
    ProfileScreen: ProfileParams;
}

// Props for DiscoveryScreen
export type DiscoveryProps = NativeStackScreenProps<NavigatorParamList, 'DiscoveryScreen'>

// Props for ProfileScreen
export type ProfileProps = NativeStackScreenProps<NavigatorParamList, 'ProfileScreen'>

// Props for CarDetailsScreen
export type CarDetailsProps = NativeStackScreenProps<NavigatorParamList, 'CarDetailsScreen'>

// Props for MyRentalsScreen
export type MyRentalsProps = NativeStackScreenProps<NavigatorParamList, 'MyRentalsScreen'>