import React, { createContext, useState } from "react";

export const UserContext = createContext({ user: 0, setUser: (user: number) => {} });

export const UserContextProvider = ({ children } :{ children: React.ReactNode }) => {
    const [user, setUser] = useState(1);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    );
}

// TODO: Har addet TODO: kommentarer de steder jeg har ændret noget i et forsøg på at få context id'et til at virke :)