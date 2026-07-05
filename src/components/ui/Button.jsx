const Button = ({children, onClick, type="button", className="", disabled=false}) => {
  return (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          inline-flex
          items-center
          justify-center
          py-3
          px-4
          rounded-xl
          font-medium 
          border 
          border-primary
          text-foreground
          bg-primary
          duration-200
          hover:bg-primary-hover
          hover:border-primary-hover
          transition-all
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
    >
        {children}
    </button>
  )
}

export default Button
