const Button = ({children, onClick, type="button"}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        className="
          mt-4
          w-full
          py-3
          rounded-lg 
          font-medium 
          border 
          border-[#4B5563] 
          bg-[#3B82F6] 
          hover:bg-[#2563EB] 
          transition-colors
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
    >
        {children}
    </button>
  )
}

export default Button
