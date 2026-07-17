export default function Header ({ title, actions }) {
    return (
        <header className="h-16 ps-8 border-b border-border flex items-center justify-between bg-surface">
            <h1 className="text-3xl text-foreground font-bold" >
                {title}
            </h1>

            <div>
                {actions}
            </div>
        </header>
    )
}