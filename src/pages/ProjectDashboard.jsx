import { useState } from "react"

export default function ProjectDashboard() {

    const [projectName, setProjectName] = useState("")
    const [projectKey, setProjectKey] = useState("")
    const [projectMemberCount, setProjectMemberCount] = useState(1)

    return(
        <>
        <div className="bg-[#111827] min-h-screen ">
            <div className="flex justify-end ">
                <button className="bg-[#3B82F6] text-[#F9FAFB] px-4 py-2 rounded-3xl mt-14 mr-10">
                    Create Project
                </button>
            </div>

            <div>
                <h2 className="text-[#F9FAFB] text-5xl font-bold">
                    Projects
                </h2>
                <div className="grid grid-cols-3 gap-4 mt-10">
                    
                </div>
            </div>
        </div>
        </>
    )
}