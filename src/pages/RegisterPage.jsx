import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../services/api"

function RegisterPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault()

        const validationError = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!email) {
            validationError.email = "Please enter email"
        } else if (!emailRegex.test(email)) {
            validationError.email = "Please enter a valid email"
        }

        if (!password) {
            validationError.password = "Please enter password"
        } else if (password.length < 8) {
            validationError.password = "Password must be of 8 characters"
        }

        if (!confirmPassword) {
            validationError.confirmPassword = "Please enter password agian"
        } else if (password !== confirmPassword) {
            validationError.confirmPassword = "Password doesn't match"
        }

        if (Object.keys(validationError).length > 0) {
            setError(validationError)
            return
        }

        setError({})
        setLoading(true)

        try {
            await api.post("/auth/register/", {email, password})
            navigate("/login")
        } catch (error) {
            console.log(error)
            setError({api: "Registration Faiked, Please try again"})
        } finally{
            setLoading(false)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input 
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && <p>{error.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error.password && <p>{error.password}</p>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error.confirmPassword && <p>{error.confirmPassword}</p>}
            </div>
            {error.api && <p> {error.api} </p>}
            <button 
                type="submit"
                disabled={loading}
            >
                {loading ? "Registering": "Register"} 
            </button>
        </form>
      
    </div>
  )
}

export default RegisterPage
