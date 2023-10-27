import Car from "./types/Car";
import {useEffect, useState} from "react";


const apiURL = "https://mobiledev.cryptobot.dk";

// This allows us to change the type later if we want to be more specific
type Endpoint = string;

class BackendHandler {

    /**
     * Gets all cars from the API.
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
                    if (!Array.isArray(json)) {
                        throw new Error("Invalid response from API, carArray is not an array" + json)
                    }
                    return json
                })
                .then(json => setCars(json))
        }, [])

        // console.log(apiURL + "/cars")
        // const jsonString = await fetchFromAPI( "/cars")
        // const carArray = JSON.parse(jsonString)
        // if (!Array.isArray(carArray)) {
        //     throw new Error("Invalid response from API, carArray is not an array" + carArray)
        // }
        //
        // const carCollection: Backend.CarCollection = []
        //
        // for (const car of carArray) {
        //     carCollection.push(new Car(car))
        // }

        return cars
    }

    //... For all the other endpoints. You will also have to implement the classes for User, FuelType, Manufacturer, etc.


}

export const Backend = new BackendHandler();
export default Backend;


// Image?
// async function fetchFromAPI(endpoint: Endpoint): Promise<string> {
//     return (await fetch(apiURL + endpoint, {mode:'cors'})).text()
// }