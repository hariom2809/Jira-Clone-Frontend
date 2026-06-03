import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3> {project.name} </h3>
      <p>{project.key}</p>
      <p>{project.member_count}</p>
    </div>
  )
}

export default ProjectCard
