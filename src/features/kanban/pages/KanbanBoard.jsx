import { useEffect, useState } from "react"
import { DragDropProvider } from "@dnd-kit/react";
import IssueCard from "../../issue/components/IssueCard"
import KanbanColumn from "../components/KanbanColumn"
import { kanbanColumns } from "../utils/columns"

export default function KambanBoard ({issues}) {

    const [boardIssues, setBoardIssues] = useState([])

    useEffect(() => (
        setBoardIssues(issues)
    ), [issues])

    const getColumnIssues = (columnId) => {
        return boardIssues.filter( issue => issue.status === columnId )
    }

    const handleDragEnd = (event) => {
        const { source, target } = event.operation

        if (!target) return

        const issueId = source.id
        const newStatus = target.id

        setBoardIssues((prevIssues) =>
            prevIssues.map((issue) =>
                issue.id === issueId ? {...issue, status: newStatus} : issue
    ))
    }

    return(
        <DragDropProvider onDragEnd={handleDragEnd}>
            {kanbanColumns.map((column) => (
                <KanbanColumn
                    key={column.id}
                    id={column.id}
                    title={column.title}
                >
                    {getColumnIssues(column.id).map((issue) => (
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