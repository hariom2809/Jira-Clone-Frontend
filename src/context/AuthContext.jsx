import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)

    const login = (currentUser) => {}
    const logout = (currentUser) => {}
    const register = (currentUser) => {}

    return(
        <AuthContext.Provider
            value={{currentUser,
                setCurrentUser, 
                accessToken, 
                setAccessToken,
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