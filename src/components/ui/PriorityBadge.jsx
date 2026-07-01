import { ISSUE_PRIORITY } from "../../constants/issuePriority"

export default function StatusBadge({ priority }) {

    const priorityConfig = ISSUE_PRIORITY[priority]

    return (
        <span 
            className={`
                    inline-flex
                    items-center
                    px-2
                    py-0.5
                    rounded-full
                    font-semibold
                    ${priorityConfig.bgColor}
                    ${priorityConfig.textColor}
                `}
        >
            {priorityConfig.label}
        </span>
    )
}