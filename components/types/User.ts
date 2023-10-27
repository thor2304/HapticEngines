export default class User implements Backend.User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    billingAddress: string;

    constructor(json: string | object) {
        const parsed: Backend.User = typeof json == "string" ? JSON.parse(json) : json;
        this.id = parsed.id;
        this.name = parsed.name;
        this.email = parsed.email;
        this.phoneNumber = parsed.phoneNumber;
        this.billingAddress = parsed.billingAddress;

        if (this.id == null || this.name == null || this.email == null ||
            this.phoneNumber == null || this.billingAddress == null) {
            throw new Error(`User is missing attributes: ${this}`);
        }
    }
}