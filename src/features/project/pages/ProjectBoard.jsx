import { useParams } from "react-router-dom"
import { useGetProject } from "../hooks/useGetProject"
import PageContainer from "../../../components/ui/PageContainer"
import ProjectHeader from "../components/ProjectHeader"
import ProjectDetail from "../components/ProjectDetail"
import KanbanStatsGrid from "../../kanban/components/KanbanStstaGrid"
import KanbanBoard from "../../kanban/pages/KanbanBoard"
import { useListIssues  } from "../../issue/hooks/useListIssues"

export default function ProjectBoard() {

    const { projectId } = useParams()
    const projectQuery = useGetProject(projectId)
    const issueQuery = useListIssues(projectId)

    if (projectQuery.isLoading) return <div> Loading ... </div>
    if (projectQuery.isError) return <div> Something went wrong </div>

    return (
        <PageContainer>
            <ProjectHeader />
            <ProjectDetail 
                project={projectQuery.data}
            />

            <KanbanStatsGrid 
                issues={issueQuery.data?.results || []}
            />

            <KanbanBoard 
                issues={issueQuery.data?.results || []}
            />
        </PageContainer>
    )
}