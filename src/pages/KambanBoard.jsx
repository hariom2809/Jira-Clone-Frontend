import { useState } from "react"
import { useIssues } from "../hooks/issueHooks"

export default KambanBoard () {

    const projectId = 1234

    const issuesQuery = useIssues(projectId)
    const issues = issuesQuery.data?.results || []

    if (issuesQuery.isLoading) return <div> Loading ...</div>
    if (issuesQuery.isError) return <div>  Failed to load issues </div>

    const todoIssues = issues.filter(
        (issues) => issues.status === "to_do"
    )

    const inProjgressIssues = issues.filter(
        (issues) => issues.status === "in_progress"
    )

    const inReviewIssues = issues.filter(
        (issues) => issues.status === "in_review"
    )

    const doneIssues = issues.filter(
        (issues) => issues.status === "done"
    )

    return(
        <div>
            <h1>Kanabn Board</h1>

            <div>
                <div>
                    <h2>To Do</h2>
                    {todoIssues.map((issue) => (
                        <div key={issue.id}>
                        {issue.title}
                        </div>
                    ))}
                </div>
                <div>
                    <h2>In Progress</h2>
                    {inProjgressIssues.map((issue) => (
                        <div key={issue.id}>
                        {issue.title}
                        </div>
                    ))}
                </div>
                <div>
                    <h2>In Review</h2>
                    {inReviewIssues.map((issue) => (
                        <div key={issue.id}>
                        {issue.title}
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Done</h2>
                    {doneIssues.map((issue) => (
                        <div key={issue.id}>
                        {issue.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}