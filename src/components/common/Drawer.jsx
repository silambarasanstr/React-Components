import { X } from "lucide-react";

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
  width = "w-full max-w-md",
  showClose = true,
}) => {
  if (!isOpen) return null;

  const positionStyles = {
    right: {
      container: "inset-y-0 right-0",
      animation: "translate-x-0",
      hidden: "translate-x-full",
    },
    left: {
      container: "inset-y-0 left-0",
      animation: "translate-x-0",
      hidden: "-translate-x-full",
    },
    top: {
      container: "inset-x-0 top-0",
      animation: "translate-y-0",
      hidden: "-translate-y-full",
    },
    bottom: {
      container: "inset-x-0 bottom-0",
      animation: "translate-y-0",
      hidden: "translate-y-full",
    },
  };

  const currentPosition = positionStyles[position];

  const sizeClass =
    position === "top" || position === "bottom"
      ? "w-full"
      : width;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          absolute
          ${currentPosition.container}
          ${sizeClass}
          flex
          flex-col
          bg-white
          shadow-xl
          dark:bg-gray-900
        `}
      >
        {/* Header */}
        {(title || showClose) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
            {title && (
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;