import { useGetIssue } from "../hooks/useGetIssue"
import IssueStatsRow from "./IssueStatsRow"

export default function IssueStats({ issueId }) {

    const issueQuery = useGetIssue(issueId)
    const issue = issueQuery.data

    if (issueQuery.isLoading) return <div> Loading... </div>
    if (issueQuery.isError) return <div> Something went wrong </div>

    return (
        <div className="flex flex-col gap-8 py-2">
            <div className="gap-3">
                <h3 className="text-2xl text-[#F9FAFB] font-bold"> Details </h3>
                <IssueStatsRow label="Status" value={issue.status} />
                <IssueStatsRow label="Priority" value={issue.priority} />
            </div>

            <div className="gap-3">
                <h3 className="text-2xl text-[#F9FAFB] font-bold"> Dates </h3>
                <IssueStatsRow label="Raised on" value={issue.created_at} />
                <IssueStatsRow label="Last update" value={issue.updated_at} />
                <IssueStatsRow label="Due Date" value={issue.due_date} />
            </div>

            <div className="gap-3">
                <h3 className="text-2xl text-[#F9FAFB] font-bold"> People </h3>
                <IssueStatsRow label="Reporter" value={issue.reporter.name} />
                <IssueStatsRow label="Assign To" value={issue.assignee} />
            </div>
        </div>
    )
}