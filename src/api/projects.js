import api from "../services/api"

export const getProjects = async () => {
    const response = await api.get("/projects/")
    return response.data
}

export const postProject = async (projectData) => {
    const response = await api.post("/projects/", projectData)
    return response.data
}