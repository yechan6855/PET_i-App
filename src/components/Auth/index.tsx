import React, { useCallback, useEffect } from "react";
import { getHost } from "../../Utils";
import { useUserContext } from "../../hooks/useUserContext";

export function Authorization({children} : {children : React.ReactNode}) {    
    const userContext = useUserContext()
    useEffect(()=>{
        if (userContext.user) return
        const fetchUser = async () => {
            try {
                const response = await fetch(getHost() + "/auth")
                const result = await response.json()
                if (!response.ok)
                    throw new Error(result.message)
                userContext.setUser(result.user)                
            } catch (error) {
                console.error(error)
            }
        }
        fetchUser()
    },[userContext.user])
    return (
        <>{children}</>
    )
}