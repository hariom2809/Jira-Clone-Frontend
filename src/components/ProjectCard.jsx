export default function ProjectCard() {
    return(
        <div className="border border-[#4B5563] bg-[#1F2937] ">
            <h3 className="text-[#F9FAFB] text-3xl ">{name}</h3>

            <div className="text-[#9CA3AF] font-bold">
                {projectKey} members: {memberCount}
            </div>
        </div>
    )
}