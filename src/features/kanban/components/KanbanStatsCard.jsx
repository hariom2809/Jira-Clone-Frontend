import Card from "../../../components/ui/Card"

export default function KanbanStatsCard({title, value}) {
    return (
        <Card>
            <div className="flex item-center justify-between text-[#F9FAFB] text-3xl font-bold">
                <span>
                    {title}
                </span>

                <span>
                    {value}
                </span>
            </div>
        </Card>
    )
} 
