import { Loader2 } from "lucide-react";
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
  return (
    <Modal
      isOpen={isOpen}
      onClose={loading ? undefined : onClose}
      title={title}
      size={size}
      showCloseButton={!loading}
      closeOnOverlayClick={!loading}
    >
      {/* Description */}
      {description && (
        <p className="mb-5 text-sm leading-6 text-slate-500">{description}</p>
      )}

      {/* Form */}
      <form onSubmit={onSubmit}>
        {/* Form Body */}
        <div className="space-y-5">{children}</div>

        {/* Footer */}
        <div className="mt-6 flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              h-10
              rounded-lg
              border border-slate-200
              bg-white
              px-4
              text-sm font-medium
              text-slate-700
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex
              h-10
              min-w-[90px]
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-blue-600
              px-4
              text-sm
              font-medium
              text-white
              shadow-sm
              transition
              hover:bg-blue-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-1
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading && <Loader2 size={16} className="animate-spin" />}

            {loading ? "Saving..." : submitText}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FormModal;
