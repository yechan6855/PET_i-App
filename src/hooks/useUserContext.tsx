import React, { createContext, useCallback, useContext } from "react";
import { Alert } from "react-native";
interface UserContextProp
{
    alert : (title :string, message : string, okCallback? : () => void) => void
}
const UserContext = createContext<UserContextProp | undefined>(undefined)

export function UserProvider({children} : {children : React.ReactNode}) {
    const alert = useCallback((title : string, message : string, okCallback? : () => void) => {
        Alert.alert(title, message, [
            {
                text : "OK",
                onPress : okCallback
            }
        ])
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