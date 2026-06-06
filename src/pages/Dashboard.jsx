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
      <>
        <button  onClick={() => setShowProjectForm(true)}>
          Create
        </button>
        {showProjectForm && 
          <div>
            <ProjectForm /> 
            
            <button onClick={() => setShowProjectForm(false)}>
              Close
            </button>
          </div>
        }
        <div>
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
      </>
    )
}

export default Dashboard
