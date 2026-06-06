import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProject, listProjects, postProject } from "../api/projects";

export const useProject = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: listProjects,
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

export const useGetProject = (projectId) => {
    return useQuery({
        queryKey: ["project", projectId],
        queryFn: () => getProject(projectId),
        enabled: Boolean(projectId),
    })
}