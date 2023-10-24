
export default class Transmission implements Backend.Transmission{
    id: number;
    name: "Manual" | "Automatic";

    constructor(json: string | Object){
        // The typedef below is dangerous, but the purpose is to ensure that the names accessed here are correct.
        // It is dangerous because the input might not actually follow this typedef. (But then the error should catch it.)
        const parsed: Backend.Transmission = typeof json == "string" ? JSON.parse(json) : json;
        this.id = parsed.id;
        this.name = parsed.name;

        if (this.id == null || this.name == null){
            throw new Error("Transmission is missing attributes");
        }
    }
}