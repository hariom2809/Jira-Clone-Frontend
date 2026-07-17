import { useContext } from "react"
import Button from "../ui/Button"
import AuthContext from "../../context/AuthContext"

export default function Sidebar () {

    const { logout } = useContext(AuthContext)

    return(
        <aside className="w-64 h-screen bg-surface border-r border-border shadow-lg">
            <Button
                className="bg-red-500 text-white"
                onClick={() => logout()}
            >
                Logout
            </Button>
        </aside>
    )
}