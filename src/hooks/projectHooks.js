import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects, postProject } from "../api/projects";

export const useProject = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
    })
}

export const useCreateProject = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: postProject,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projects"],
            })
        }
    })
}