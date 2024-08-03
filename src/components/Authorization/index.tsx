import React, { useCallback, useEffect, useState } from "react";
import { getServerURL } from "../../constants/Config";
import { User } from "../../types/user";
import { useUserContext } from "../../hooks/useUserContext";

export function Authorization({children} : {children : React.ReactNode}) {

    const { user, setUser } = useUserContext()
    function userRequest() {
        async function fetchUser() {
            if (user) return
            try {
                const resopnse = await fetch(`${getServerURL()}/auth`, {
                    method : "post"
                })
                const result = await resopnse.json()

                if (!resopnse.ok)
                    throw new Error(result.message)
                
                setUser(result.user)

            } catch (error) {
                if (error instanceof Error) {
                    throw error
                }
                throw new Error("로그인이 필요한 페이지 입니다.")
            }
        }
        fetchUser()
    }

    useEffect(userRequest, [])
    return <>{children}</>
}