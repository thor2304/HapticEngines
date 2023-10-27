
export default class Manufacturer implements Backend.Manufacturer{
    id: number;
    name: string;

    constructor(json: string | Object) {
        const parsed: Backend.Manufacturer = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed != "object") {
            throw new Error("Manufacturer is not an object" + parsed);
        }

        if (Object.keys(parsed).length != 2) {
            throw new Error("Manufacturer does not have the correct number of attributes");
        }

        if (parsed.id === undefined || parsed.id == null || parsed.name === undefined || parsed.name == null) {
            throw new Error("Invalid response from API, manufacturer object does not have the correct keys, " +
                "should be name and id" + parsed)
        }

        this.id = parsed.id;
        this.name = parsed.name;
    }
}