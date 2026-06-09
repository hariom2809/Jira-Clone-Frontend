import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"

export default function LoginPage () {

  return (
    <div>
      <LoginForm />
      <p>
        Don't have an account:
        <Link to="/register">
          Register
        </Link>
      </p>
    </div>
  )
}