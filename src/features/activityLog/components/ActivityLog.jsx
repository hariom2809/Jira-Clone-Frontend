import { useListActivityLog } from "../hooks/useListActivityLog"
import ActivityLogRow from "./ActivityLogRow"

export default function ActivityLog({ issueId }) {

    const activityLogQuery = useListActivityLog(issueId)

    if (activityLogQuery.isLoading) return <div> Loading... </div>
    if (activityLogQuery.isError) return <div> Something went wrong </div>

    return (
        <div>
            {activityLogQuery.data?.results.map(
                (activity) => (
                    <ActivityLogRow
                        key={activity.id}
                        activityLog={activity}
                    />
                ) 
            )}
        </div>
    )
}