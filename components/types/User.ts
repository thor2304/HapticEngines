export default class User implements Backend.User {
    billingAddress: string;
    email: string;
    id: number;
    name: string;
    phoneNumber: string;

    constructor(json: string | Object) {
        const parsed: Backend.User = typeof json == "string" ? JSON.parse(json) : json;

        if (typeof parsed != "object") {
            throw new Error("User is not an object" + parsed);
        }

        if (Object.keys(parsed).length != 5) {
            throw new Error("User does not have the correct number of attributes");
        }

        if (parsed.billingAddress === undefined || parsed.billingAddress == null || parsed.email === undefined ||
            parsed.email == null || parsed.id === undefined || parsed.id == null || parsed.name === undefined ||
            parsed.name == null || parsed.phoneNumber === undefined || parsed.phoneNumber == null) {
            throw new Error("Invalid response from API, user object does not have the correct keys, " +
                "should be billingAddress, email, id, name and phoneNumber" + parsed)
        }

        this.billingAddress = parsed.billingAddress;
        this.email = parsed.email;
        this.id = parsed.id;
        this.name = parsed.name;
        this.phoneNumber = parsed.phoneNumber;
    }
}