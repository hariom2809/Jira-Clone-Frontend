import api from "../services/api"

export const getProjects = async () => {
    const response = await api.get("/projects/")
    return response.data
}