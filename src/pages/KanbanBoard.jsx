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
    const issues = mockIssues

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
        console.log(event)
    }

    return(
        <DragDropProvider onDragEnd={handleDragEnd}>
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
        </DragDropProvider>
    )
}