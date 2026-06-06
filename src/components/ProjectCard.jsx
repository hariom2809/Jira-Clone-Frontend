export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        rounded-xl
        border border-[#4B5563]
        bg-[#1F2937]
        p-4
        transition-all
        hover:border-[#3B82F6]
        hover:shadow-lg
      "
    >
      <h3
        className="
          mb-6
          text-lg
          font-semibold
          text-[#F9FAFB]
        "
      >
        {project.name}
      </h3>

      <div
        className="
          flex
          items-center
          justify-between
          text-sm
        "
      >
        <span
          className="
            font-medium
            text-[#9CA3AF]
          "
        >
          {project.key}
        </span>

        <span
          className="
            flex
            items-center
            gap-1
            text-[#9CA3AF]
          "
        >
          👥 {project.member_count}
        </span>
      </div>
    </div>
  )
}