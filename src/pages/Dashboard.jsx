import ProjectCard from "../components/ProjectCard"
import { useProject } from "../hooks/useProject"

const Dashboard = () => {
  
  const { projects, isLoading, error } = useProject()

  if (isLoading) return <div> Loading </div>

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  )
}

export default Dashboard
