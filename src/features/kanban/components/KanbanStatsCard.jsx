import Card from "../../../components/ui/Card"

export default function KanbanStatsCard({title, value}) {
    return (
        <Card>
            <h2 className="font-semibold justify-center text-[#F9FAFB] text-3xl">
                {title}
            </h2>

            <p className="text-[#9CA3AF] text-3xl justify-center">
                {value}
            </p>
        </Card>
    )
} 
