import { useParams } from "react-router-dom"
import { useGetIssue } from "../hooks/useGetIssue"
import PaeContainer from "../../../components/ui/PageContainer"
import IssueDetail from "../components/IssueDetail"
import IssueStats from "../components/IssueStats"

export default function IssuePage() {

    const { issueId } = useParams()
    const issueQuery = useGetIssue(issueId)
    const issue = issueQuery.data

    if (issueQuery.isLoading) return <div> Loading... </div>
    if (issueQuery.isErro) return <div> Something went wrong </div>

    return (
        <PaeContainer>
            <div className="flex grid-6 gap-4">
                <div className="w-7/10">
                    <IssueDetail issue={issue} />
                </div>

                <div className="w-3/10">
                    <IssueStats issue={issue} />
                </div>
            </div>
        </PaeContainer>
    )
}