import KanbanStatsCard from "./KanbanStatsCard";

export default function KanbanStatsGrid({ issues }) {

    const todoIssues = issues.filter(
        issue => issue.status === "to_do"
    ).length

    const inProgessIssues = issues.filter(
        issue => issue.status === "in_progress"
    ).length

    const inReviewIssues = issues.filter(
        issue => issue.status === "in_review"
    ).length

    const doneIssues = issues.filter(
        issue => issue.status === "done"
    ).length

    return (
        <div className="grid gap-4 grid-cols-4">
            <KanbanStatsCard title="To Do" value={todoIssues} />
            <KanbanStatsCard title="In Progress" value={inProgessIssues} />
            <KanbanStatsCard title="In Review" value={inReviewIssues} />
            <KanbanStatsCard title="Done" value={doneIssues} />
        </div>
    )
}