import { useDraggable } from "@dnd-kit/react"

export default function IssueCard ({ issue }) {

    const { ref } = useDraggable({
        id: issue.id,
        data: {
            issueId: issue.id,
            status: issue
        }
    })

    return (
        <div ref={ref}>
            <p>{issue.title}</p>
        </div>
    )
}