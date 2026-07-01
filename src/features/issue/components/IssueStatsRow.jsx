export default function IssueStatsRow({ label, value}) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-[#9CA3AF] text-sm">
                {label}
            </span>
            
            <span className="text-[#F9FAFB] font-medium">
                {value}
            </span>
        </div>
    )
}