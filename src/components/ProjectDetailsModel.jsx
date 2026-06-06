import { useGetProject } from "../hooks/projectHooks"

const ProjectDetailsModel = ({ projectId, onClose }) => {

    const query = useGetProject(projectId)

    if (query.isLoading) return <div> Loading ... </div>
    if (query.isError) return <div> Failed to load project  </div>

    const project = query.data

    return (
        <div>
            <h3> {project.name} </h3>
            <div> {project.key} </div>
            <div> {project.description} </div>

            <button onClick={onClose}>
                Close
            </button>
        </div>
    )
}

export default ProjectDetailsModel