import React from "react";

// used the context
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}


export default UserContextProvider
