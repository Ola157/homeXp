'use client'

import { useAuthState } from "@/app/authstatus"
import { useRouter } from "next/navigation"


export const useHandleRoute = () => {
    const router = useRouter()

    const auth = useAuthState()
    if (auth === undefined) return
    const { isLogged, handleAuth } = auth

    const handleRoute = (path: string): void => {

        if (path.includes('authentication') && isLogged) {
            handleAuth(false)
            router.push('/')
            return
        }

        router.push(path)
    }

    return handleRoute
}

