import Transmission from "./Transmission";
import FuelType from "./FuelType";

export default class Car implements Backend.Car{
    id: number;
    model: string;
    description: string;
    doors: number;
    engineCCSize: number;
    fuelType: Backend.FuelType;
    manufacturer: Backend.Manufacturer;
    transmission: Backend.Transmission;
    pricePerDay: number;
    pricePerWeek: number;
    wheelSize: number;
    imageName: string;

    constructor(json: string |object){
        const parsed: Backend.Car = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed !== "object") {
            throw new Error("Invalid response from API, car is not an object" + parsed)
        }

        if (Object.keys(parsed).length !== 12) {
            throw new Error("Invalid response from API, car object does not have the correct number of keys (12)" + parsed)
        }

        if (parsed.id === undefined || parsed.manufacturer === undefined || parsed.model === undefined || parsed.fuelType === undefined ||
            parsed.pricePerDay === undefined || parsed.pricePerWeek === undefined || parsed.description === undefined || parsed.doors === undefined ||
            parsed.engineCCSize === undefined || parsed.transmission === undefined || parsed.wheelSize === undefined || parsed.imageName === undefined) {
            throw new Error("Invalid response from API, car object does not have the correct keys, " +
                "should be id, manufacturer, model, fuelType, pricePerDay, pricePerWeek, description, doors, engineCCSize, transmission, wheelSize and imageName" + parsed)
        }

        this.id = parsed.id;
        this.model = parsed.model;
        this.description = parsed.description;
        this.doors = parsed.doors;
        this.engineCCSize = parsed.engineCCSize;
        this.imageName = parsed.imageName;
        this.pricePerDay = parsed.pricePerDay;
        this.pricePerWeek = parsed.pricePerWeek;
        this.wheelSize = parsed.wheelSize;

        this.manufacturer = parsed.manufacturer; // TODO: This is not cast to a FuelType object. (Because it does not exist yet.)
        this.fuelType = new FuelType(parsed.fuelType);
        this.transmission = new Transmission(parsed.transmission);

        if (this.id == null || this.model == null || this.description == null || this.doors == null ||
            this.engineCCSize == null || this.imageName == null || this.pricePerDay == null || this.pricePerWeek == null
            || this.wheelSize == null || this.manufacturer == null || this.fuelType == null || this.transmission == null
        ){
            throw new Error(`Car is missing attributes: ${this}`);
        }
    }


}