import React, { useState } from 'react'
import { useCreateProject } from "../hooks/projectHooks"

const ProjectForm = () => {

    const createProject = useCreateProject()

    const [projectKey, setProjectKey] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        createProject.mutate({
            key: projectKey, 
            name: projectName, 
            description: projectDescription
        })
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Project Key*</label>
            <input 
                type="text"
                value={projectKey}
                onChange={(e) => setProjectKey(e.target.value)}
                required 
            />
        </div>
        <div>
            <label>Project Name*</label>
            <input 
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required 
            />
        </div>
        <div>
            <label> Description </label>
            <input 
                type="text"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
            />
        </div>
        <button 
            type="submit"
            disabled={createProject.isLoading}
        >
            {createProject.isLoading ? "Creating ..." : "Create" } 
        </button>
        {createProject.error && <p> {createProject.error.message} </p> }
    </form>

  )
}

export default ProjectForm
