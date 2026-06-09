export default function Input ({label, error, className = "", ...props}) {
    
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm text-[#F9FAFB] font-medium">
                    {label}
                </label>
            )}

            <input
                className={`
                    bg-[#374151]
                    text-[#9CA3AF]
                    w-full
                    rounded-lg
                    px-3
                    py-2
                    outline-none
                    border
                    focus:ring-2
                    ${error ? "border-red-500" : "border-[#4B5563]" }
                    ${className}`
                }
                {...props}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}