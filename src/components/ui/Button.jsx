const Button = ({children, onClick, type="button"}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 rounded-xl font-medium bg-[#0F172A] border border-[#4B5563] hover-bg-[#2563EB] "
    >
        {children}
    </button>
  )
}

export default Button
