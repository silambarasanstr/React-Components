import { X } from "lucide-react";
import Modal from "./Modal";

const FormModal = ({
  isOpen,
  onClose,
  onSubmit = (e) => e.preventDefault(),
  title = "Add New",
  description,
  children,
  submitText = "Save",
  cancelText = "Cancel",
  loading = false,
  size = "md",
}) => {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={`
          w-full
          ${sizes[size] || sizes.md}
          overflow-hidden
          rounded-xl
          bg-white
          shadow-xl
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-sm text-gray-500">
                {description}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close modal"
            className="
              rounded-lg
              p-1.5
              text-gray-400
              transition
              hover:bg-gray-100
              hover:text-gray-600
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit}>
          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto px-5 py-5">
            {children}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-5 py-3 border-t border-gray-200 bg-gray-50">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-gray-700 transition bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {cancelText}
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-lg min-w-20 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Saving..." : submitText}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FormModal;