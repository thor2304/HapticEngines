import Transmission from "./Transmission";

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
        this.fuelType = parsed.fuelType; // TODO: This is not cast to a FuelType object. (Because it does not exist yet.)
        this.transmission = new Transmission(parsed.transmission);

        if (this.id == null || this.model == null || this.description == null || this.doors == null ||
            this.engineCCSize == null || this.imageName == null || this.pricePerDay == null || this.pricePerWeek == null
            || this.wheelSize == null || this.manufacturer == null || this.fuelType == null || this.transmission == null
        ){
            throw new Error(`Car is missing attributes: ${this}`);
        }
    }


}