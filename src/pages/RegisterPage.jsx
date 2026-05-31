import React, { useState } from 'react'
import api from "../services/api"

function RegisterPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault()

        const validationError = {}

        if (!email) {
            validationError.email = "Please enter email"
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
            const response = await api.post("/auth/register/", {email, password})
            
        } catch (error) {
            console.log(error)
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
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm Password</label>
                <input 
                    type="password"
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
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
