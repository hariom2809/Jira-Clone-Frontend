import { useDraggable } from "@dnd-kit/react"
import Card from "../../../components/ui/Card"

export default function IssueCard ({ issue }) {

    const { ref } = useDraggable({
        id: issue.id,
        data: {
            issueId: issue.id,
            status: issue
        }
    })

    return (
        <Card className="cursor-grab hover:border-blue-500 transition-colors">
            <div ref={ref} className="space-y-3">
                <h4 className="text-[#F9FAFB] font-medium leading-snug">
                    {issue.title}
                </h4>

                <div className="flex item-center justify-between">
                    <span className="text-xs font-semibold uppercase">
                        {issue.priority}
                    </span>

                    <span className="text-xs text-[#9CA3AF]">
                        {issue.number}
                    </span>
                </div>
            </div>
        </Card>
    )
}