import React, {useEffect, useState} from "react";
import Car from "../types/classes/Car";
import Manufacturer from "../types/classes/Manufacturer";
import User from "../types/classes/User";

const apiURL = "https://mobiledev.cryptobot.dk";

class BackendHandlerClass {

    async getCar(id: number): Promise<Backend.Car | undefined> {
        const [car, setCar] = useState<Backend.Car>()

        fetchFromAPIWithId("car", id, setCar, validateCarCollection)

        return car
    }

    /**
     * Gets all cars from the API.
     * @throws Error if the response from the API is not valid
     */
    async getCars(): Promise<Backend.CarCollection> {
        const [cars, setCars] = useState<Backend.CarCollection>([])

        fetchFromAPI("cars", setCars, validateCarCollection)

        return cars
    }

    async getCarHash(): Promise<Backend.CarHash | undefined> {
        const [carHash, setCarHash] = useState<Backend.CarHash>()

        fetchFromAPI("carHash", setCarHash, (possibleCollection: any) => possibleCollection)

        return carHash
    }

    async getManufacturer(id: number): Promise<Backend.Manufacturer | undefined> {
        const [manufacturer, setManufacturer] = useState<Backend.Manufacturer>()

        fetchFromAPIWithId("manufacturers", id, setManufacturer, validateManufacturer)

        return manufacturer
    }

    async getManufacturers(): Promise<Backend.ManufacturerCollection> {
        const [manufacturers, setManufacturers] = useState<Backend.ManufacturerCollection>([])

        fetchFromAPI("manufacturers", setManufacturers, validateManufacturerCollection)

        return manufacturers
    }

    async getUser(id: number): Promise<Backend.User | undefined> {
        const [user, setUser] = useState<Backend.User>()

        fetchFromAPIWithId("users", id, setUser, validateUser)

        return user
    }


    async getRentals(): Promise<Backend.RentalCollection> {
        const [rentals, setRentals] = useState<Backend.RentalCollection>([])

        fetchFromAPI("rentals", setRentals, (possibleCollection: any) => possibleCollection)

        return rentals
    }

    /**
     * Gets a rental from the API.
     * @param rentalId The id of the rental to get. A rental is the time that a car was rented out
     */
    async getRental(rentalId: number): Promise<Backend.Rental | undefined> {
        const [rental, setRental] = useState<Backend.Rental>()

        fetchFromAPIWithId("rentals/byRental", rentalId, setRental, (possibleCollection: any) => possibleCollection)

        return rental
    }

    async getRentalsByUser(userId: number): Promise<Backend.RentalCollection | undefined> {
        const [rentals, setRentals] = useState<Backend.RentalCollection>()

        fetchFromAPIWithId("rentals/byUser", userId, setRentals, (possibleCollection: any) => possibleCollection)

        return rentals
    }

    getImageUrl(imageName: string): string {
        return apiURL + "/images/" + imageName
    }
}


function fetchFromAPI(endpoint: Backend.Endpoint,
                      setDataOption: React.Dispatch<React.SetStateAction<any>>,
                      validatorFunction: (possibleCollection: any) => any): void {
    fetchFromAPIUnderlying(endpoint, setDataOption, validatorFunction)
}

function fetchFromAPIUnderlying(endpoint: string,
                                setDataOption: React.Dispatch<React.SetStateAction<any>>,
                                validatorFunction: (possibleCollection: any) => any): void {
    const apiString = apiURL + "/" + endpoint

    useEffect(() => {
        fetch(apiString)
            .then(response => response.json().catch(() => {
                console.error("Invalid response from API, not valid JSON: " + apiString + " " + response)
            }))
            .then(json => {
                return validatorFunction(json)
            })
            .then(json => setDataOption(json))
    }, [apiString])
}


function fetchFromAPIWithId(endpoint: Backend.EndpointWithIds, id: number, setDataOption: React.Dispatch<React.SetStateAction<any>>, validatorFunction: (possibleCollection: any) => any): void {
    const apiString = endpoint + "/" + id
    fetchFromAPIUnderlying(apiString, setDataOption, validatorFunction)
}

function validateManufacturer(manufacturer: any): Backend.Manufacturer {
    return new Manufacturer(manufacturer)
}

function validateCarCollection(possibleCollection: any): Backend.CarCollection {
    if (!Array.isArray(possibleCollection)) {
        throw new Error("Invalid response from API, carArray is not an array" + possibleCollection)
    }

    const output: Backend.CarCollection = []

    for (const car of possibleCollection) {
        output.push(new Car(car))
    }

    return output
}

function validateUser(user: any): Backend.User {
    return new User(user)
}

function validateManufacturerCollection(possibleCollection: any): Backend.ManufacturerCollection {
    if (!Array.isArray(possibleCollection)) {
        throw new Error("Invalid response from API, manufacturerArray is not an array" + possibleCollection)
    }

    const output: Backend.ManufacturerCollection = []

    for (const manufacturer of possibleCollection) {
        output.push(new Manufacturer(manufacturer))
    }

    return output
}

export const BackendHandler = new BackendHandlerClass();
export default BackendHandler;