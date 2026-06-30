import { useGetIssue } from "../hooks/useGetIssue"
import Card from "../../../components/ui/Card"
import IssueHeader from "./IssueHeader"

export default function IssueDetail({ issueId }) {

    const issueQuery = useGetIssue(issueId)
    const issue = issueQuery.data

    if (issueQuery.isLoading) return <div> Loading... </div>
    if(issueQuery.isError) return <div> Something went wrong </div>

    return (
        <Card>
            <IssueHeader 
                title={issue.title}
                description={issue.description}
            />
            

            <hr />

            <h3>
                Comments
            </h3>
            <p>No comments yet</p>
        </Card>
    )
}