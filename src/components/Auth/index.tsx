import React, { useEffect } from "react";

export function Authorization({children} : {children : React.ReactNode}) {
    useEffect(()=>{
        console.log("검증..")
    },[])
    return (
        <>{children}</>
    )
}