import api from "../services/api"

export const listIssues = async (projectId) => {
    const response = await api.get("/projects/${projectId}/issues")
    return response.data
}