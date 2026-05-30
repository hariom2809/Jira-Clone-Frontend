import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../services/api"

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await api.post("/auth/login/", {email, password})

      localStorage.setItem("accessToken", response.data.access_token)
      localStorage.setItem("refreshToken", response.data.refresh_token)

      navigate("/dashboard")

      console.log(response.data)
    } catch (error) {
      console.log(error)
      setError("Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label >Password</label>
          <input 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>

        <button 
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
