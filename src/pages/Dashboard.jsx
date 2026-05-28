import { useState } from "react"
import ProjectCard from '../components/ProjectCard'

export default function Dashboard() {

    const [projectName, setProjectName] = useState("")
    const [projectKey, setProjectKey] = useState("")
    const [projectMemberCount, setProjectMemberCount] = useState(1)

    return(
        <>
        <div className="bg-[#111827] min-h-screen ">
            <h2 className="text-[#F9FAFB] text-5xl font-bold">
                Projects
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <ProjectCar />
            </div>
        </div>
        </>
    )
}