export default class User implements Backend.User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    billingAddress: string;

    constructor(json: string | object) {
        const parsed: Backend.User = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed !== "object") {
            throw new Error("Invalid response from API, user is not an object.")
        }

        if (Object.keys(parsed).length !== 12) {
            throw new Error("Invalid response from API, car object does not have the correct number of keys (12).")
        }

        this.id = parsed.id;
        this.name = parsed.name;
        this.email = parsed.email;
        this.phoneNumber = parsed.phoneNumber;
        this.billingAddress = parsed.billingAddress;

        if (this.id == null || this.name == null || this.email == null ||
            this.phoneNumber == null || this.billingAddress == null) {
            throw new Error(`Car is missing attributes: ${this}`);
        }
    }
}
