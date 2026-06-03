import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/projects";

export const useProject = () => {
    const query = useQuery({
        queryKey: ["projects"],
        queryFn: getProjects,
    })

    return {
        projects: query.data?.results || [],
        loading: query.isLoading,
        error: query.error,
    }
}