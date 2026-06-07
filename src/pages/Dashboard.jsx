import { useState } from "react"
import { useProject } from "../hooks/projectHooks"
import Button from "../components/ui/Button"
import Header from "../components/layout/Header"
import PageContainer from "../components/ui/PageContainer"
import Card from "../components/ui/Card"
import ProjectForm from "../components/ui/ProjectForm"
import ProjectDetailsModel from "../components/ui/ProjectDetailsModel"

const Dashboard = () => {
    
    const query = useProject()

    const [selectProject, setSelectProject] = useState(null)
    const [showProjectDetails, setShowProjectDetails] = useState(false)
    const [showProjectForm, setShowProjectForm] = useState(false)

    if (query.isLoading) return <div> Loading </div>

    return (
      <PageContainer>
      <Header
        title="Projects"
        actions={(
          <Button onClick={() => setShowProjectForm(true)}>
            Create Project
          </Button>
        )}
      />

      <div>
        {showProjectForm && (
          <ProjectForm onClose={() => setShowProjectForm(false)} />
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {query.data?.results.map((project) => (
            <Card
              key={project.id}
              onClick={() => {
                setSelectProject(project.id)
                setShowProjectDetails(true)
              }}
              className="cursor-pointer hover:border-[#3B82F6] hover:shadow-lg">
                <h3 className="mb-6 text-lg font-semibold text-[#F9FAFB]">
                  {project.name}
                </h3>

              <div className="flex items-center justify-between text-sm">
                <span className=" font-medium text-[#9CA3AF]">
                  {project.key}
                </span>

                <span
                  className="flex items-center gap-1 text-[#9CA3AF]">
                  👥 {project.member_count}
                </span>
              </div>
            </Card>
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
      </PageContainer>
    )
}

export default Dashboard
