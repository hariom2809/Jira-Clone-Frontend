import {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from "../context/AuthContext"
import api, {setAccessToken as setApiAccessToken} from "../services/api"

const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const {setAccessToken} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await api.post("/auth/login/", {email, password})
      setAccessToken(response.data.access_token)
      setApiAccessToken(response.data.access_token)
      navigate("/dashboard")
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
