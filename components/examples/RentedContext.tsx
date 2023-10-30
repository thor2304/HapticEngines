import React, {createContext, useState} from "react";

export const RentedContext = createContext({ rented: ["Car is currently being rented","Rent Car","Rent Car","Car is currently being rented","Car is currently being rented"], setRented: (rented: string[]) => {} });
export function RentedContextProvider({ children } : { children: React.ReactNode }) {
    const [rented, setRented] = useState(["Car is currently being rented","Rent Car","Rent Car","Car is currently being rented","Car is currently being rented"]);

    return (
        <RentedContext.Provider value={{ rented, setRented }}>
            {children}
        </RentedContext.Provider>
    );
}