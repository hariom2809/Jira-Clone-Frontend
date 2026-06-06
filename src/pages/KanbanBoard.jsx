import { useState } from "react"
import { DragDropProvider } from "@dnd-kit/react";
import { useIssues } from "../hooks/issueHooks"
import IssueCard from "../components/IssueCard"
import KanbanColumn from "../components/KanbanColumn"

export const mockIssues = [
  {
    id: "1",
    number: "PROJ-1",
    title: "Fix login authentication bug",
    status: "to_do",
    priority: "high",
    assignee: {
      id: "u1",
      name: "Hariom Gupta",
    },
  },
  {
    id: "2",
    number: "PROJ-2",
    title: "Implement issue comments API",
    status: "in_progress",
    priority: "medium",
    assignee: {
      id: "u2",
      name: "John Smith",
    },
  },
  {
    id: "3",
    number: "PROJ-3",
    title: "Review RBAC permission updates",
    status: "in_review",
    priority: "highest",
    assignee: {
      id: "u3",
      name: "Sarah Wilson",
    },
  },
  {
    id: "4",
    number: "PROJ-4",
    title: "Deploy latest release",
    status: "done",
    priority: "low",
    assignee: {
      id: "u4",
      name: "Mike Johnson",
    },
  },
];

export default function KambanBoard () {

    // const projectId = 1234

    // const issuesQuery = useIssues(projectId)
    const [issues, setIssues] = useState(mockIssues)

    // if (issuesQuery.isLoading) return <div> Loading ...</div>
    // if (issuesQuery.isError) return <div>  Failed to load issues </div>

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
        const { source, target } = event.operation

        if (target) return

        const issueId = source.id
        const newStatus = target.id

        setIssues((prevIssues) =>
            prevIssues.map((issue) =>
                issue.id === issueId ? {...issue, status: newStatus} : issue
    ))
    }

    return(
        <DragDropProvider onDragEnd={handleDragEnd}>
            <div>
                <h1>Kanabn Board</h1>

                <div>
                    <KanbanColumn id="to_do" title="To Do">
                        {todoIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="in_progress" title="In Progress">
                        {inProjgressIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="in_review" title="In Review">
                        {inReviewIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                    <KanbanColumn id="done" title="Done">
                        {doneIssues.map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                    </KanbanColumn>
                </div>
            </div>
        </DragDropProvider>
    )
}