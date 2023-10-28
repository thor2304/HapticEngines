import {NativeStackScreenProps} from "@react-navigation/native-stack";

type DiscoveryParams = undefined;
type RentalParams = undefined;
type ProfileParams = {userId: number};
type CarDetailParams = { car: Backend.car };
type CarCardParams = {
    car: Backend.Car,
    alignLeft: boolean
}

type CarListParams = {
    data: Backend.CarCollection,
    switchAlignment: boolean,

}

// This type is used to define the parameters passed to the CarDetailsScreen and the DiscoveryScreen
type NavigatorParamList = {
    CarDetailsScreen: CarDetailParams;
    DiscoveryScreen: DiscoveryParams;
    MyRentalsScreen: RentalParams;
    ProfileScreen: ProfileParams;
    DiscoveryScreenStack: undefined;
    MyRentalsScreenStack: undefined;
    ProfileScreenStack: undefined;
    CarCard: CarCardParams;
}

// Props for DiscoveryScreen
export type DiscoveryProps = NativeStackScreenProps<NavigatorParamList, 'DiscoveryScreen'>

// Props for ProfileScreen
export type ProfileProps = NativeStackScreenProps<NavigatorParamList, 'ProfileScreen'>

// Props for CarDetailsScreen
export type CarDetailsProps = NativeStackScreenProps<NavigatorParamList, 'CarDetailsScreen'>

export type discoveryNavigation = DiscoveryProps.navigation

// Props for MyRentalsScreen
export type MyRentalsProps = NativeStackScreenProps<NavigatorParamList, 'MyRentalsScreen'>



// Component params:
export type CarCardPropsForReal = {
    params: CarCardParams,
    navigation: discoveryNavigation,
    children?: never[]
}

export type CarListProps = {
    params: CarListParams,
    navigation: discoveryNavigation,
    children?: never[]
}

