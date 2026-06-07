export default function Header ({ title, actions }) {
    return (
        <header className="h-16 ps-8 border-b border-[#4B5563] flex items-center justify-between bg-[#111827]">
            <h1 className="text-3xl text-[#F9FAFB]" >
                {title}
            </h1>

            <div>
                {actions}
            </div>
        </header>
    )
}