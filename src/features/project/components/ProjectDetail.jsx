export default function ProjectDetail({project}) {
    return (
        <div>
            <h1>
                {project.name}
            </h1>

            <p>
                {project.key}
            </p>

            <p>
                {project.description}
            </p>
        </div>
    )
}