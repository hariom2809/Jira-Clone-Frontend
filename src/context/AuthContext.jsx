import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)

    const login = async (email, password) => {
        await api.post("/auth/login/", {email, password})
    }

    const register = async (email, password) => {
        await api.post("/auth/register/", {email, password})
    }

    const logout = async () => {
        await api.post("/auth/logout/")
    }

    return(
        <AuthContext.Provider
            value={{currentUser,
                setCurrentUser, 
                login,
                logout,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext