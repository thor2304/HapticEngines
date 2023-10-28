export default class FuelType implements Backend.FuelType {
    id: number;
    name: "Petrol" | "Diesel" | "Electric";

    constructor(json: string | Object) {
        const parsed: Backend.FuelType = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed != "object") {
            throw new Error("FuelType is not an object" + parsed);
        }

        if (Object.keys(parsed).length != 2) {
            throw new Error("FuelType does not have the correct number of attributes");
        }

        if (parsed.id === undefined || parsed.id == null || parsed.name === undefined || parsed.name == null) {
            throw new Error("Invalid response from API, fuel type object does not have the correct keys, " +
                "should be name and id" + parsed)
        }

        this.id = parsed.id;
        this.name = parsed.name;
    }
}