import ProjectCard from "./ProjectCard"

export default function ProjectGrid ({projects, onProjectClick}) {
    return (
        <div
            className="grid gap-4 md:grid-cols-2 lg:grid-cos-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={projecct}
                    onClick={() => onProjectClick(project.id)}
                />
            ))}
        </div>
    )
}