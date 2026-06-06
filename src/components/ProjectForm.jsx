import { useState } from "react"
import { useCreateProject } from "../hooks/projectHooks"

const ProjectForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    key: "",
    description: "",
  })
  const createProject = useCreateProject()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    createProject.mutate(formData, {
      onSuccess: () => {
        onClose?.()
      },
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="w-full max-w-2xl rounded-xl border border-[#4B5563] bg-[#1F2937] p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#F9FAFB]">Create Project</h2>
            <p className="text-sm text-[#9CA3AF]">Add a new project to your dashboard.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-[#D1D5DB] hover:bg-[#374151] hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-[#E5E7EB]">
            Project Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-[#4B5563] bg-[#111827] px-4 py-2 text-[#F9FAFB] outline-none ring-0 placeholder:text-[#9CA3AF] focus:border-[#3B82F6]"
              placeholder="Enter project name"
            />
          </label>

          <label className="block text-sm text-[#E5E7EB]">
            Project Key
            <input
              type="text"
              name="key"
              value={formData.key}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-[#4B5563] bg-[#111827] px-4 py-2 text-[#F9FAFB] outline-none placeholder:text-[#9CA3AF] focus:border-[#3B82F6]"
              placeholder="e.g. JIRA"
            />
          </label>

          <label className="block text-sm text-[#E5E7EB]">
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full rounded-lg border border-[#4B5563] bg-[#111827] px-4 py-2 text-[#F9FAFB] outline-none placeholder:text-[#9CA3AF] focus:border-[#3B82F6]"
              placeholder="Describe the project"
            />
          </label>

          {createProject.isError && (
            <p className="text-sm text-red-400">Failed to create project. Please try again.</p>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#4B5563] bg-transparent px-4 py-2 text-[#F9FAFB] hover:bg-[#374151]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createProject.isPending}
              className="rounded-lg bg-[#3B82F6] px-5 py-2 font-medium text-white hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {createProject.isPending ? "Creating..." : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProjectForm