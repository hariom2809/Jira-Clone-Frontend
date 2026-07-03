import { useParams } from "react-router-dom"
import { useGetIssue } from "../hooks/useGetIssue"
import PaeContainer from "../../../components/ui/PageContainer"
import IssueDetail from "../components/IssueDetail"
import IssueStats from "../components/IssueStats"
import CommentSection from "../../comment/components/CommentSection"
import ActivityLog from "../../activityLog/components/ActivityLog"

export default function IssuePage() {

    const { issueId } = useParams()
    const issueQuery = useGetIssue(issueId)
    const issue = issueQuery.data

    if (issueQuery.isLoading) return <div> Loading... </div>
    if (issueQuery.isError) return <div> Something went wrong </div>

    return (
        <PaeContainer>
            <div className="flex grid-6 gap-4">
                <div className="w-7/10">
                    <IssueDetail issue={issue} />
                    <CommentSection issueId={issueId} />
                    <ActivityLog issueId={issueId} />
                </div>

                <div className="w-3/10">
                    <IssueStats issue={issue} />
                </div>
            </div>
        </PaeContainer>
    )
}