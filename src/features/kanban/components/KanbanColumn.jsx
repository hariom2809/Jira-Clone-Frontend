import { useDroppable } from "@dnd-kit/react"

export default function KanbanColumn ({id, title, children}) {
    
    const { ref } = useDroppable({
        id,
        data: {
            columnId: id,
        }
    })

    return (
        <div ref={ref} className="min-h-[600px] p-4 rounded-lg bg-[#1F2937]">
            <div className="mb-4">
                <h3 className="text-[#F9FAFB] font-semibold"> 
                    {title} 
                </h3>
            </div>

            <div className="space-y-3">
                {children}
            </div>
        </div>
    )
}