import { useDroppable } from "@dnd-kit/react"

export default function KanbanColumn ({id, title, children}) {
    
    const { ref } = useDroppable({
        id,
        data: {
            columnId: id,
        }
    })

    return (
        <div ref={ref}>
            <h3> {title} </h3>
            {children}
        </div>
    )
}