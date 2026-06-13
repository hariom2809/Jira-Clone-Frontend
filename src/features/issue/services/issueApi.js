import api from "../../../app/api"

export const listIssues = async (projectId) => {
    const response = await api.get(`/projects/${projectId}/issues/`)
    return response.data
}

export const updateIssue = async (issueId, issueData) => {
    const response = await api.patch(`issues/${issueId}/`, issueData)
    return response.data
}