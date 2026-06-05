import { useDraggable } from "@dnd-kit/react"

export default IssueCard ({ issue }) {

    const { ref } = useDraggable({
        id: issue.id,
    })

    return (
        <div ref={ref}>
            <p>{issue.title}</p>
        </div>
    )
}