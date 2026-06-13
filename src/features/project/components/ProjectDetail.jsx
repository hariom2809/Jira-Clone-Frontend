export default function ProjectDetail({ project }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#1F2937] border border-[#4B5563] rounded-xl p-6">
                <h2 className="text-2xl font-bold text-[#F9FAFB]">
                    {project.name}
                </h2>

                <span className="inline-block mt-4 px-3 py-1 rounded-md bg-gray-700 text-[#9CA3AF] text-sm">
                    {project.key}
                </span>
            </div>

            <div className="lg:col-span-2 bg-[#1F2937] border border-[#4B5563] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4">
                    Description
                </h3>

                <div className="max-h-48 overflow-y-auto">
                    <p className="text-[#9CA3AF] whitespace-pre-wrap">
                        {project.description || "No description provided."}
                    </p>
                </div>
            </div>

        </div>
    )
}