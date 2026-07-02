import { useMutation } from "@tanstack/react-query";
import { postComment } from "../services/commentApi";

export const usePostComment = () => {
    return useMutation({
        mutationFn: postComment
    })
}