import React, {useEffect, useState} from "react";
import Car from "./types/Car";

const apiURL = "https://mobiledev.cryptobot.dk";

class BackendHandlerClass {

    /**
     * Gets all cars from the API.
     * @throws Error if the response from the API is not valid
     */
    async getCars(): Promise<Backend.CarCollection> {
        // Should of course be implemented, but the return hides ts errors

        const [cars, setCars] = useState<Backend.CarCollection>([])

        fetchFromAPI("cars", setCars, validateCarCollection)

        return cars
    }

    async getUser(id: number): Promise<Backend.User|undefined> {
        const [user, setUser] = useState<Backend.User>()

        fetchFromAPIWithId("users", id, setUser, validateUser)

        return user
    }

    getImageUrl(imageName: string): string {
        return apiURL + "/images/" + imageName
    }
    //... For all the other endpoints. You will also have to implement the classes for User, FuelType, Manufacturer, etc.
}


function fetchFromAPI(endpoint: Backend.Endpoint,
                      setDataOption: React.Dispatch<React.SetStateAction<any>>,
                      validatorFunction: (possibleCollection: any) => any): void {
    fetchFromAPIUnderlying(endpoint, setDataOption, validatorFunction)
}

function fetchFromAPIUnderlying(endpoint: string,
                      setDataOption: React.Dispatch<React.SetStateAction<any>>,
                      validatorFunction: (possibleCollection: any) => any): void {
    useEffect(() => {
        fetch(apiURL + "/" + endpoint)
            .then(response => response.json())
            .then(json => {
                return validatorFunction(json)
            })
            .then(json => setDataOption(json))
    }, [])
}


function fetchFromAPIWithId(endpoint: Backend.EndpointWithIds, id: number, setDataOption: React.Dispatch<React.SetStateAction<any>>,   validatorFunction: (possibleCollection: any) => any): void {
    fetchFromAPIUnderlying(endpoint + "/" + id, setDataOption, validatorFunction)
}

function validateManufacturer(manufacturer: any): Backend.Manufacturer {
    if (typeof manufacturer !== "object") {
        throw new Error("Invalid response from API, manufacturer is not an object" + manufacturer)
    }

    if (Object.keys(manufacturer).length !== 2) {
        throw new Error("Invalid response from API, manufacturer object does not have the correct number of keys" + manufacturer)
    }

    if (manufacturer.id === undefined || manufacturer.name === undefined) {
        throw new Error("Invalid response from API, manufacturer object does not have the correct keys, " +
            "should be name and id" + manufacturer)
    }

    return {
        id: manufacturer.id,
        name: manufacturer.name,
    };
}

function validateFuelType(fuelType: any): Backend.FuelType {
    if (typeof fuelType !== "object") {
        throw new Error("Invalid response from API, fuelType is not an object" + fuelType)
    }

    if (Object.keys(fuelType).length !== 2) {
        throw new Error("Invalid response from API, fuelType object does not have the correct number of keys" + fuelType)
    }

    if (fuelType.id === undefined || fuelType.name === undefined) {
        throw new Error("Invalid response from API, fuelType object does not have the correct keys, " +
            "should be name and id" + fuelType)
    }

    return {
        id: fuelType.id,
        name: fuelType.name,
    }
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

function validateUser(user: any) :Backend.User {
    if (typeof user !== "object") {
        throw new Error("Invalid response from API, user is not an object" + user)
    }

    if (Object.keys(user).length !== 5) {
        throw new Error("Invalid response from API, user object does not have the correct number of keys (5)" + user)
    }

    if (user.id === undefined || user.name === undefined || user.email === undefined || user.phoneNumber === undefined ||
        user.billingAddress === undefined) {
        throw new Error("Invalid response from API, user object does not have the correct keys, " +
            "should be id, name, email, phoneNumber and billingAddress" + user)
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        billingAddress: user.billingAddress,
    }
}

function validateManufacturerCollection(possibleCollection: any): Backend.ManufacturerCollection {
    if (!Array.isArray(possibleCollection)) {
        throw new Error("Invalid response from API, manufacturerArray is not an array" + possibleCollection)
    }

    const output: Backend.ManufacturerCollection = []

    for (const manufacturer of possibleCollection) {
        output.push(validateManufacturer(manufacturer))
    }

    return output
}

export const BackendHandler = new BackendHandlerClass();
export default BackendHandler;