import Car from "./Car";
import User from "./User";

export default class Rental implements Backend.Rental {
    car: Backend.Car;
    endDate: Date;
    id: number;
    startDate: Date;
    user: Backend.User;

    constructor(rental: string | Object) {
        const parsed: Backend.Rental = typeof rental == "string" ? JSON.parse(rental) : rental;

        if (typeof parsed != "object") {
            throw new Error("Rental is not an object" + parsed);
        }

        if (Object.keys(parsed).length != 5) {
            throw new Error("Rental does not have the correct number of attributes");
        }

        if (parsed.car === undefined || parsed.car == null || parsed.endDate === undefined ||
            parsed.endDate == null || parsed.id === undefined || parsed.id == null || parsed.startDate === undefined ||
            parsed.startDate == null || parsed.user === undefined || parsed.user == null) {
            throw new Error("Invalid response from API, rental object does not have the correct keys, " +
                "should be car, endDate, id, startDate and user" + parsed)
        }

        this.car = new Car(parsed.car);
        this.endDate = new Date(parsed.endDate);
        this.id = parsed.id;
        this.startDate = new Date(parsed.startDate);
        this.user = new User(parsed.user);
    }
}