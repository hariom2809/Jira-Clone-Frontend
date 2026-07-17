import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useProject } from "../hooks/useProject"
import Button from "../../../components/ui/Button"
import Header from "../../../components/layout/Header"
import PageContainer from "../../../components/ui/PageContainer"
import ProjectGrid from "../components/ProjectGrid"
import ProjectCreateModal from "../components/ProjectCreateModal"

export default function Dashboard() {
    
    const navigate = useNavigate()

    const query = useProject()
    const [showProjectForm, setShowProjectForm] = useState(false)

    if (query.isLoading) return <div> Loading </div>

    return (
      <PageContainer>
        <Header
          title="Projects"
          actions={
            <Button 
              onClick={() => setShowProjectForm(true)}
              className="rounded-2xl text-white"
            >
              Create Project
            </Button>
          }
        />

        <ProjectCreateModal 
          isOpen={showProjectForm}
          onClose={() => setShowProjectForm(false)}
        />

        <ProjectGrid
          projects={query.data?.results || []}
          onProjectClick={(id) => navigate(`/project/${id}`)}
        />

      </PageContainer>
    )
}