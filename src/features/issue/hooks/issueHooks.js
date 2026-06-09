import { useQuery } from "@tanstack/react-query"
import { listIssues } from "../services/issues"

export const useIssues = (projectId) => {
    return useQuery({
        queryKey: ["issues", projectId],
        queryFn: () => listIssues(projectId),
    })
}