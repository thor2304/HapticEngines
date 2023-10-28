declare namespace Backend {

    /**
     * This allows us to change the type later if we want to be more specific
     */
    type Endpoint = "cars" |"cars/hash" | "rentals" | "manufacturers" | "carHash";
    type EndpointWithIds = "car" | "rentals/byRental" | "rentals/byUser" | "manufacturers" | "images"| "users";
    type PostableEndpoint = "rentals" | "cars";

    /**
     * Transmission is used to represent the different types of transmissions.<br>
     * It can be one of
     * <ul>
     *     <li>Manual</li>
     *     <li>Automatic</li>
     *     <li>More can come in the future.</li>
     * </ul>
     *
     * @property id - The id of the type of transmission.
     * @property name - The name of the type of transmission.
     */
    interface Transmission {
        id: number;
        name: "Manual" | "Automatic";
    }

    /**
     * FuelType is a type that is used to represent the fuel type of a car.
     * It can be one of
     * <ul>
     *     <li>Petrol</li>
     *     <li>Diesel</li>
     *     <li>Electric</li>
     *     <li>More can come in the future.</li>
     * </ul>
     * @property id - The id of the fuel type.
     * @property name - The name of the fuel type.
     */
    interface FuelType {
        id: number;
        name: "Petrol" | "Diesel" | "Electric";
    }

    /**
     * Manufacturer is a type that is used to represent the manufacturer of a car.
     * @property id - The id of the manufacturer.
     * @property name - The name of the manufacturer.
     * @see ManufacturerCollection
     */
    interface Manufacturer {
        id: number;
        name: string;
    }

    /**
     * imageName is the name of the image that can be passed to the BackendHandler to get the image.
     */
    type imageName = string;

    /**
     * Car is a type that is used to represent a car.
     * Some of the attributes reference other types, such as Manufacturer and FuelType.<br>
     * @property id - The id of the car.
     * @property model - The model of the car.
     * @property manufacturer - The manufacturer of the car.
     *  @see Backend.Manufacturer
     *  @see ManufacturerCollection
     * @property engineCCSize - The engine size of the car.
     * @property fuelType - The fuel type of the car.
     *  @see Backend.FuelType
     * @property pricePerDay - The price per day of the car.
     * @property pricePerWeek - The price per week of the car.
     * @property doors - The number of doors of the car.
     * @property description - The description of the car.
     * @property transmission - The transmission of the car.
     *  @see Backend.Transmission
     * @property wheelSize - The wheel size of the car.
     * @property imageName - The name of the image of the car.
     *  @see Backend.imageName
     * @see CarCollection
     */
    interface Car {
        id: number;
        model: string;
        manufacturer: Manufacturer;
        engineCCSize: number;
        fuelType: FuelType;
        pricePerDay: number;
        pricePerWeek: number;
        doors: number;
        description: string;
        transmission: Transmission;
        wheelSize: number;
        imageName: imageName;
    }

    /**
     * User is used to represent a user of the system.<br>
     * @property id - The id of the user.
     * @property name - The name of the user.
     * @property email - The email of the user.
     * @property phoneNumber - The phone number of the user.
     * @property billingAddress - The billing address of the user.
     */
    interface User {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
        billingAddress: string;
        image: string;
    }


    /**
     * Rental is used to represent a rental of a car.<br>
     * @property id - The id of the rental.
     * @property car - The car that is being rented.
     *  @see Backend.Car
     *  @see CarCollection
     * @property user - The user that is renting the car.
     *  @see Backend.User
     * @property startDate - The start date of the rental.
     * @property endDate - The end date of the rental.
     * @see RentalCollection
     */
    interface Rental {
        id: number;
        car: Car;
        user: User;
        startDate: Date;
        endDate: Date;
    }

    /**
     * The CarCollection is an array of Cars.
     * @see Backend.Car
     */
    type CarCollection = Car[];

    /**
     * The RentalCollection is an array of Rentals.
     * @see Backend.Rental
     */
    type RentalCollection = Rental[];

    /**
     * The ManufacturerCollection is an array of Manufacturers.
     * @see Backend.Manufacturer
     */
    type ManufacturerCollection = Manufacturer[];

    /**
     * The CarHash is a string that is used to represent a state of available cars in the backend.
     */
    type CarHash = string;
}