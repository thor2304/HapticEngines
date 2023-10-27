export default class User implements Backend.User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    billingAddress: string;
    image: string;

    constructor(json: string | object) {
        const parsed: Backend.User = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed !== "object") {
            throw new Error("Invalid response from API, user is not an object.")
        }

        const attributeCount = 6;
        if (Object.keys(parsed).length != attributeCount) {
            throw new Error(`Invalid response from API, user does not have the correct number of attributes, should be ${attributeCount}.`);
        }

        if (parsed.id === undefined || parsed.id == null || parsed.name === undefined || parsed.name == null ||
            parsed.email === undefined || parsed.email == null || parsed.phoneNumber === undefined ||
            parsed.phoneNumber == null || parsed.billingAddress === undefined || parsed.billingAddress == null ||
            parsed.image === undefined || parsed.image == null) {
            throw new Error("Invalid response from API, user object does not have the correct keys, " +
                "should be id, name, email, phoneNumber, billingAddress and image" + parsed)
        }

        this.id = parsed.id;
        this.name = parsed.name;
        this.email = parsed.email;
        this.phoneNumber = parsed.phoneNumber;
        this.billingAddress = parsed.billingAddress;
        this.image = parsed.image;
    }
}
