export default IssueCard (issue) {
    return (
        <div>
            <h3>{issue.title}</h3>
            <div> {issue.number} </div>
            <div> {issue.priority} </div>
            <div> {issue.assignee?.name?.chatAt(0)} </div>
        </div>
    )
}