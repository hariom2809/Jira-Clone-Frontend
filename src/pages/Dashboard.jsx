import ProjectCard from "../components/ProjectCard"
import { useProject } from "../hooks/projectHooks"
import Button from "../components/Button"
import ProjectForm from "../components/ProjectForm"
import { useState } from "react"

const Dashboard = () => {
    
    const query = useProject()

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
            
---            <button onClick={() => setShowProjectForm(false)}>
              Close
            </button>
          </div>
        }
        <div>
          {query.data?.results.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </>
    )
}

export default Dashboard
