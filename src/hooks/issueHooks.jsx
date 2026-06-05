import { useQuery } from "@tanstack/react-query"
import { listIssues } from "../api/issues"

export const useIssues = (projectId) => {
    return useQuery({
        queryKey: ["issues", projectId],
        queryFn: () => listIssues(projectId),
    })
}