import Input from "../../../components/ui/Input"

export default function ProjectFormFields ({ formData, handleChange }) {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                    label="Project Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g Jira"
                    required
                />

                <Input 
                    label="Project Key"
                    name="key"
                    value={formData.key}
                    onChange={handleChange}
                    placeholder="e.g JIRA"
                    required
                />
            </div>

            <div>
                <label className="block text text-[#F9FAFB] mb-1">
                    Description
                </label>

                <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Description"
                    className="
                                w-full min-h-[140px] px-2 py-1 rows-8 
                                rounded-lg border outline-none 
                                bg-[#374151] text-[#9CA3AF] border-[#4B5563] 
                                focus:border-[#3B82F6]"
                />
            </div>
        </>
    )
}