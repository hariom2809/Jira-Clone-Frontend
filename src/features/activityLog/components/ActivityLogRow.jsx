import { formatDate } from "../../../utils/formatDate"

export default function ActivityLogRow({ activityLog }) {
    return (
        <div>
            {activityLog.old_value}     {activityLog.new_value}

            <small> {formatDate(activityLog.created_at)}</small>
        </div>
    )
}