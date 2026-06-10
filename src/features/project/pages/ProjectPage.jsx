import { useGetProject } from "../hooks/useGetProject"

const ProjectDetailsModel = ({ projectId, onClose }) => {
    const query = useGetProject(projectId)

    if (query.isLoading) return <div>Loading...</div>
    if (query.isError) return <div>Failed to load project</div>

    const project = query.data

    return (
        <div
            className="
                fixed inset-0
                flex items-center justify-center
                bg-black/60
                p-6
            "
        >
            <div
                className="
                    w-full max-w-5xl
                    rounded-xl
                    border border-[#4B5563]
                    bg-[#1F2937]
                    p-8
                "
            >
                {/* Project Name */}
                <h2
                    className="
                        text-3xl
                        font-bold
                        text-[#F9FAFB]
                    "
                >
                    {project.name}
                </h2>

                {/* Project Key */}
                <p
                    className="
                        mb-8
                        text-[#9CA3AF]
                    "
                >
                    ({project.key})
                </p>

                {/* Description Heading */}
                <h3
                    className="
                        mb-3
                        text-lg
                        font-medium
                        text-[#F9FAFB]
                    "
                >
                    Description
                </h3>

                {/* Description Box */}
                <div
                    className="
                        h-64
                        overflow-y-auto
                        rounded-lg
                        border border-[#4B5563]
                        bg-[#374151]
                        p-4
                        text-[#F9FAFB]
                    "
                >
                    {project.description || "No description provided"}
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="
                            rounded-lg
                            bg-[#3B82F6]
                            px-5
                            py-2
                            font-medium
                            text-white
                            transition-colors
                            hover:bg-[#2563EB]
                        "
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsModel