import React, { createContext, useState } from "react";
import {lightTheme, Theme} from "./Themes";

export const UserContext = createContext(null);

export function UserContextProvider() {
    const [id, setId] = useState(null);

    return (
        <UserContext.Provider value={}>

        </UserContext.Provider>
    )
}

