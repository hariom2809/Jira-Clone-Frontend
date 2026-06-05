import { useState } from "react"
import { useIssues } from "../hooks/issueHooks"
import IssueCard from "../components/IssueCard"
import KanbanColumn from "../components/KanbanColumn"

export default KambanBoard () {

    const projectId = 1234

    const issuesQuery = useIssues(projectId)
    const issues = issuesQuery.data?.results || []

    if (issuesQuery.isLoading) return <div> Loading ...</div>
    if (issuesQuery.isError) return <div>  Failed to load issues </div>

    const todoIssues = issues.filter(
        (issues) => issues.status === "to_do"
    )

    const inProjgressIssues = issues.filter(
        (issues) => issues.status === "in_progress"
    )

    const inReviewIssues = issues.filter(
        (issues) => issues.status === "in_review"
    )

    const doneIssues = issues.filter(
        (issues) => issues.status === "done"
    )

    const handleDragEnd = (event) => {
        console.log(event)
    }

    return(
        <DragContext onDragEnd={handleDragEnd}>
            <div>
                <h1>Kanabn Board</h1>

                <div>
                    <KanbanColumn id="todo" title="To Do">
                        {todoIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="inProgress" title="In Progress">
                        {inProjgressIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="inReview" title="In Review">
                        {inReviewIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="done" title="Done">
                        <h2>Done</h2>
                        {doneIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                </div>
            </div>
        </DragContext>
    )
}