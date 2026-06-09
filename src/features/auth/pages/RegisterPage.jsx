import { Link } from "react-router-dom"
import RegisterForm from "../components/RegisterFrom"

function RegisterPage() {
  return (
    <div>
        <RegisterForm />
        <p>
            Already have an account
            <Link to="/login">
                Log in
            </Link>
        </p>
    </div>
  )
}

export default RegisterPage
