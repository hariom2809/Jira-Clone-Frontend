
export default function IssueHeader({ title, description }) {

    return (
        <>
            <h1> {title} </h1>

            <h3>Description</h3>
            <p> {description} </p>
        </>
    )
}