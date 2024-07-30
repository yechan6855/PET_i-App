import React, { createContext, useCallback, useContext } from "react";
import { Alert } from "react-native";
interface UserContextProp
{
    alert : (title :string, message : string) => void
}
const UserContext = createContext<UserContextProp | undefined>(undefined)

export function UserProvider({children} : {children : React.ReactNode}) {
    const alert = useCallback((title : string, message : string) => {
        Alert.alert(title, message)
    }, [])
    return (
        <UserContext.Provider value={{
            alert
        }}>
            { children }
        </UserContext.Provider>
    )    
}

export function useUserContext() : UserContextProp {
    const result = useContext(UserContext)
    if (!result) throw new Error("UserContext Create Error")
    return result
}