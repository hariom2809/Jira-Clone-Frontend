import ProjectCard from "../components/ProjectCard"
import { useProject } from "../hooks/projectHooks"
import Button from "../components/Button"
import ProjectForm from "../components/ProjectForm"
import { useState } from "react"
import ProjectDetailsModel from "../components/ProjectDetailsModel"

const Dashboard = () => {
    
    const query = useProject()

    const [selectProject, setSelectProject] = useState(null)
    const [showProjectDetails, setShowProjectDetails] = useState(false)
    const [showProjectForm, setShowProjectForm] = useState(false)

    if (query.isLoading) return <div> Loading </div>

    return (
      <div className="min-h-screen bg-[#111827] p-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#F9FAFB]">
            Projects
          </h1>

          <button
            onClick={() => setShowProjectForm(true)}
            className="rounded-lg bg-[#3B82F6] px-4 py-2 font-medium text-white hover:bg-[#2563EB]"
          >
            Create Project
          </button>
        </div>

        {showProjectForm && (
          <ProjectForm onClose={() => setShowProjectForm(false)} />
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {query.data?.results.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => {
                setSelectProject(project.id)
                setShowProjectDetails(true)
              }}
            />
          ))}
        </div>
        {showProjectDetails && 
          <ProjectDetailsModel
            projectId={selectProject}
            onClose={() => {
              setSelectProject(null)
              setShowProjectDetails(false)
            }}
          />
        }
      </div>
    )
}

export default Dashboard
