import React, { useState } from 'react'

const ProjectForm = () => {

    const [projectKey, setProjectKey] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    
  return (
    <form>
        <div>
            <label>Project Key</label>
            <input type="text" />
        </div>
        <div>
            <label>Project Name</label>
            <input type="text" />
        </div>
        <div>
            <label> Description </label>
            <input type="text" />
        </div>
    </form>

  )
}

export default ProjectForm
