import {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext'
import api from "../services/api"

function Dashboard() {

    const {currentUser, setCurrentUser} = useContext(AuthContext)

    useEffect(() => {
        fetchCurrentUser()
    }, [])

    const fetchCurrentUser = async () => {
        try {
            const response = await api.get("/auth/me/")
            setCurrentUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <h1>Projects</h1>
                <h1>{currentUser?.email}</h1>
            </div>
        </>
    )
}

export default Dashboard