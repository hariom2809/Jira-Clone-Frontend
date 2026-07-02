import { useState } from "react"
import { usePostComment } from "../hooks/usePostComment"
import Input from "../../../components/ui/Input"
import Button from "../../../components/ui/Button"

export default function CommentForm({ issueId }) {

    const [body, setBody] = useState("")
    const { mutate, isPending } = usePostComment()

    const handleSubmit = () => {
        if (!body.trim()) return

        mutate({
            issueId,
            body
        },
        {
            onSuccess: () => {setBody("")}
        },
    )
    }

    return (
        <>
            <Input
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Add comment"
            />

            <Button
                onClick={handleSubmit}
            >
                {isPending ? "Posting..." : "Post"}
            </Button>
        </>
    )
}