import { useDroppable } from "@dnd-kit/react"

export default KanbanColumn ({ref, title, children}) {
    
    const { ref } = useDroppable({
        id,
    })

    return (
        <div ref={ref}>
            <h3> {title} </h3>
            {children}
        </div>
    )
}