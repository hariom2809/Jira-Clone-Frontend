export default function CommentCard({ comment }) {
    return(
        <div>
            <p> {comment.author} </p>
            <p> {comment.body} </p>
        </div>
    )
}