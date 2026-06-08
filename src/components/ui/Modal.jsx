const Modal = ({isOpen, onClose, title, children, maxWidth = "max-w-2xl",}) => {
  
    if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      onClick={onClose}
    >
      <div
        className={`w-full ${maxWidth} rounded-xl border border-[#4B5563] bg-[#1F2937] shadow-2xl`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#374151] p-6">
          <h2 className="text-2xl font-semibold text-[#F9FAFB]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-[#D1D5DB] hover:bg-[#374151] hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal