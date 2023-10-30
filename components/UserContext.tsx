import React, { createContext, useState } from "react";

export const defaultUser: Backend.User = {
    id: 1,
    name: "Name unavailable",
    email: "Email unavailable",
    phoneNumber: "Phone number unavailable",
    billingAddress: "Billing address unavailable",
    image: "404_img.png",
}

export const UserContext = createContext({ user: defaultUser, setUser: (user: Backend.User) => {
        console.log("User set to " + user + " in the wrong place")
    } });

export const UserContextProvider = ({ children } :{ children: React.ReactNode }) => {
    const [user, setUser] = useState(defaultUser);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}