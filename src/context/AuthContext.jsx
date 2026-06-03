import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = async (email, password) => {
        await api.post("/auth/login/", {email, password})
        await fetchCurrentUser()
    }

    const register = async (email, password) => {
        await api.post("/auth/register/", {email, password})
    }

    const logout = async () => {
        await api.post("/auth/logout/")
        setCurrentUser(null)
    }

    const fetchCurrentUser = async () => {
        
        try {
            const response = await api.get("/auth/me/")
            setCurrentUser(response.data)
        } catch (error) {
            setCurrentUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    return(
        <AuthContext.Provider
            value={{currentUser,
                loading,
                login,
                logout,
                register,
                fetchCurrentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext