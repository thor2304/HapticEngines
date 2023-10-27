import {useEffect, useState} from "react";
import Manufacturer = Backend.Manufacturer;


const apiURL = "https://mobiledev.cryptobot.dk";

// This allows us to change the type later if we want to be more specific
type Endpoint = string;

class BackendHandler {

    /**
     * Gets all cars from the API.
     * @throws Error if the response from the API is not valid
     */
    async getCars(): Promise<Backend.CarCollection> {
        // Should of course be implemented, but the return hides ts errors

        const [cars, setCars] = useState<Backend.CarCollection>([])

        useEffect(() => {
            fetch(apiURL + "/cars")
                .then(response => response.json())
                .then(json => {
                    // Move this into function that checks if it lives up to carCollection, if true return the json
                    // as a carcollection object
                    return validateCarCollection(json)
                })
                .then(json => setCars(json))
        }, [])

        return cars
    }

    //... For all the other endpoints. You will also have to implement the classes for User, FuelType, Manufacturer, etc.
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

function validateTransmission(transmission: any): Backend.Transmission {
    if (typeof transmission !== "object") {
        throw new Error("Invalid response from API, transmission is not an object" + transmission)
    }

    if (Object.keys(transmission).length !== 2) {
        throw new Error("Invalid response from API, transmission object does not have the correct number of keys" + transmission)
    }

    if (transmission.id === undefined || transmission.name === undefined) {
        throw new Error("Invalid response from API, transmission object does not have the correct keys, " +
            "should be name and id" + transmission)
    }

    return {
        id: transmission.id,
        name: transmission.name,
    };
}

function validateCar(car: any): Backend.Car {
    if (typeof car !== "object") {
        throw new Error("Invalid response from API, car is not an object" + car)
    }

    if (Object.keys(car).length !== 12) {
        throw new Error("Invalid response from API, car object does not have the correct number of keys (12)" + car)
    }

    if (car.id === undefined || car.manufacturer === undefined || car.model === undefined || car.fuelType === undefined ||
        car.pricePerDay === undefined || car.pricePerWeek === undefined || car.description === undefined || car.doors === undefined ||
        car.engineCCSize === undefined || car.transmission === undefined || car.wheelSize === undefined || car.imageName === undefined) {
        throw new Error("Invalid response from API, car object does not have the correct keys, " +
            "should be id, manufacturer, model, fuelType, pricePerDay, pricePerWeek, description, doors, engineCCSize, transmission, wheelSize and imageName" + car)
    }

    return {
        id: car.id,
        manufacturer: validateManufacturer(car.manufacturer),
        model: car.model,
        fuelType: validateFuelType(car.fuelType),
        pricePerDay: car.pricePerDay,
        pricePerWeek: car.pricePerWeek,
        description: car.description,
        doors: car.doors,
        engineCCSize: car.engineCCSize,
        transmission: validateTransmission(car.transmission),
        wheelSize: car.wheelSize,
        imageName: car.imageName,
    }
}

function validateCarCollection(possibleCollection: any): Backend.CarCollection {
    if (!Array.isArray(possibleCollection)) {
        throw new Error("Invalid response from API, carArray is not an array" + possibleCollection)
    }

    const output: Backend.CarCollection = []

    for (const car of possibleCollection) {
        output.push(validateCar(car))
    }

    return output
}

export const Backend = new BackendHandler();
export default Backend;


// Image?
async function fetchFromAPI(endpoint: Endpoint): Promise<string> {
    return (await fetch(apiURL + endpoint, {mode: 'cors'})).text()
}