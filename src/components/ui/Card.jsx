export default function Card ({ children, className }) {
    return (
        <div className={`bg-[#1F2937] border border-[#4B5563] rounded-xl p-5 ${className}`}>
            {children}
        </div>
    )
}