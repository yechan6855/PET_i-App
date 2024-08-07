import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { User } from "../types/user";
interface UserContextProp
{
    alert : (title :string, message : string, okCallback? : () => void) => void;
    user : User | undefined;
    setUser : React.Dispatch<React.SetStateAction<User | undefined>>;
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
    const [user, setUser] = useState<User | undefined>()
    return (
        <UserContext.Provider value={{
            alert,
            user,
            setUser
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