import { useListComments } from "../hooks/useListComments"
import CommentCard from "./CommentCard"

export default function CommentSection({ issueId }) {

    const commentQuery = useListComments(issueId)
    
    if (commentQuery.isLoading) return <div> Loading... </div>
    if (commentQuery.isError) return <div> Something went wrong </div> 

    return (
        <div>
            <h2> Comments </h2>

            {commentQuery.data?.results.map(
                (comment) => ( <CommentCard 
                    key={comment.id} 
                    comment={comment} 
                />
            ))}
        </div>
    )
}