import {
  AlertTriangle,
  CheckCircle,
  Info,
  Loader2,
  X,
} from "lucide-react";
import Modal from "./Modal";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  variant = "danger",
}) => {
  const variants = {
    danger: {
      icon: AlertTriangle,
      iconWrapper: "bg-red-50",
      iconColor: "text-red-600",
      button:
        "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    },

    success: {
      icon: CheckCircle,
      iconWrapper: "bg-green-50",
      iconColor: "text-green-600",
      button:
        "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    },

    info: {
      icon: Info,
      iconWrapper: "bg-blue-50",
      iconColor: "text-blue-600",
      button:
        "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    },
  };

  const currentVariant =
    variants[variant] || variants.danger;

  const Icon = currentVariant.icon;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full max-w-md overflow-hidden bg-white shadow-xl rounded-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              ${currentVariant.iconWrapper}
            `}
          >
            <Icon
              size={22}
              strokeWidth={2}
              className={currentVariant.iconColor}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close"
            className="flex items-center justify-center w-8 h-8 text-gray-400 transition rounded-lg hover:bg-gray-100 hover:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pt-4">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col-reverse gap-2 px-6 py-4 mt-6 border-t border-gray-100 bg-gray-50/50 sm:flex-row sm:justify-end"
        >
          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="h-10 px-4 text-sm font-medium text-gray-700 transition bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cancelText}
          </button>

          {/* Confirm */}
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              px-4
              text-sm
              font-medium
              text-white
              shadow-sm
              transition
              focus:outline-none
              focus:ring-2
              focus:ring-offset-1
              disabled:cursor-not-allowed
              disabled:opacity-60
              ${currentVariant.button}
            `}
          >
            {loading && (
              <Loader2
                size={16}
                className="animate-spin"
              />
            )}

            {loading
              ? "Processing..."
              : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;