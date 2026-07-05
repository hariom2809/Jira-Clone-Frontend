export default function AuthLayout({title, subtitle, children}) {

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-lg rounded-2xl shadow-lg bg-surface border border-border p-8">
                <div className="text-center mb-8">
                    <h1 className="text-foreground text-4xl font-bold tracking-tight">
                        Jire Clone
                    </h1>

                    <h3 className="mt-4 text-2xl text-foreground font-semibold">
                        {title}
                    </h3>

                    {subtitle && (
                        <p className="mt-2 text-sm text-text-muted">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="mt-8">
                    {children}
                </div>
            </div>
        </div>
    )
}