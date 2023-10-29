import React, { createContext, useState } from "react";

const UserContext = createContext(0);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(0);

    return (
        <UserContext.Provider value={[user, setUser]}>
            { children }
        </UserContext.Provider>
    );
}

// TODO: Har addet TODO: kommentarer de steder jeg har ændret noget i et forsøg på at få context id'et til at virke :)