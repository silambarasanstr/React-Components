import {
  AlertTriangle,
  CheckCircle,
  Info,
  Loader2,
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
    <Modal
      isOpen={isOpen}
      onClose={loading ? undefined : onClose}
      title={title}
      size="sm"
      showCloseButton={!loading}
      closeOnOverlayClick={!loading}
    >
      <div className="space-y-5">
        {/* Icon */}
        <div
          className={`
            flex h-11 w-11 items-center justify-center
            rounded-full
            ${currentVariant.iconWrapper}
          `}
        >
          <Icon
            size={21}
            strokeWidth={2}
            className={currentVariant.iconColor}
          />
        </div>

        {/* Message */}
        <div>
          <p className="text-sm leading-6 text-slate-500">
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              h-10 rounded-lg
              border border-slate-200
              bg-white px-4
              text-sm font-medium text-slate-700
              transition
              hover:bg-slate-50
              focus:outline-none
              focus:ring-2
              focus:ring-slate-200
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`
              flex h-10 items-center justify-center gap-2
              rounded-lg px-4
              text-sm font-medium text-white
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

            {loading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;