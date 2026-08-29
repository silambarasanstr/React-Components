import { X } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-2xl",
  showCloseButton = true,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-black/40"
    >
      <div
        className={`
          w-full
          ${width}
          overflow-hidden
          rounded-xl
          bg-white
          shadow-xl
        `}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-gray-200 "
          >
            {title ? (
              <h2 className="text-base font-semibold text-gray-900">
                {title}
              </h2>
            ) : (
              <div />
            )}

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 text-gray-400 transition rounded-lg  hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;