import { useEffect, useState } from "react"
import { DragDropProvider } from "@dnd-kit/react";
import IssueCard from "../../issue/components/IssueCard"
import KanbanColumn from "../components/KanbanColumn"

const columns = [
    {
        id: "to_do",
        title: "To Do",
    },
    {
        id: "in_progress",
        title: "In Progress",
    },
    {
        id: "in_review",
        title: "In Review",
    },
    {
        id: "done",
        title: "Done",
    },
]

export default function KambanBoard ({issues}) {

    const [boardIssues, setBoardIssues] = useState(issues)

    useEffect(() => (
        setBoardIssues(issues)
    ), [issues])

    const handleDragEnd = (event) => {
        const { source, target } = event.operation

        if (target) return

        const issueId = source.id
        const newStatus = target.id

        setBoardIssues((prevIssues) =>
            prevIssues.map((issue) =>
                issue.id === issueId ? {...issue, status: newStatus} : issue
    ))
    }

    return(
        <DragDropProvider onDragEnd={handleDragEnd}>
            {columns.map((column) => (
                <KanbanColumn
                    key={column.id}
                    id={column.id}
                    title={column.title}
                >
                    {boardIssues
                        .filter((issue) => issue.status === column.id)
                        .map((issue) => (
                            <IssueCard
                                key={issue.id}
                                issue={issue}
                            />
                        ))}
                </KanbanColumn>
            ))}
        </DragDropProvider>
    )
}