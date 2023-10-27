
export default class Transmission implements Backend.Transmission{
    id: number;
    name: "Manual" | "Automatic";

    constructor(json: string | Object){
        // The typedef below is dangerous, but the purpose is to ensure that the names accessed here are correct.
        // It is dangerous because the input might not actually follow this typedef. (But then the error should catch it.)
        const parsed: Backend.Transmission = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed != "object"){
            throw new Error("Transmission is not an object" + parsed);
        }

        if (Object.keys(parsed).length != 2){
            throw new Error("Transmission does not have the correct number of attributes");
        }

        if (parsed.id === undefined || parsed.name === undefined || parsed.id == null || parsed.name == null) {
            throw new Error("Invalid response from API, transmission object does not have the correct keys, " +
                "should be name and id" + parsed)
        }

        this.id = parsed.id;
        this.name = parsed.name;
    }
}