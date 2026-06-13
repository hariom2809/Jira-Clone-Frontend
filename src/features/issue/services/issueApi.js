import api from "../../../app/api"

export const listIssues = async (projectId) => {
    const response = await api.get(`/projects/${projectId}/issues/`)
    return response.data
}