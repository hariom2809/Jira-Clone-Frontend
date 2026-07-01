import { ISSUE_STATUS } from "../../constants/issueStatus"

export default function StatusBadge({ status }) {

    const statusConfig = ISSUE_STATUS[status]

    return (
        <span 
            className={`
                    inline-flex
                    items-center
                    px-2
                    py-0.5
                    rounded-full
                    font-semibold
                    ${statusConfig.bgColor}
                    ${statusConfig.textColor}
                `}
        >
            {statusConfig.label}
        </span>
    )
}