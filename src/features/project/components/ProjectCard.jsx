import Card from "../../../components/ui/Card"

export default function ProjectCard({project, onClick}) {
    return (
        <Card
            onClick={onClick}
            className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#3B82F6] hover:shadow-xl"
        >
            <h1 className="font-semibold text-lg text-foreground mb-6">
                {project.name}
            </h1>

            <div className="flex item-center justify-between text-sm">
                <span className="font-medium text-text-muted">
                    {project.key}
                </span>
                <span className="font-medium text-text-muted">
                    👥{project.member_count}
                </span>
            </div>

        </Card>
    )
}