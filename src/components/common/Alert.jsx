import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

const Alert = ({
  variant = "info",
  title,
  message,
  children,
  onClose,
  showIcon = true,
  className = "",
}) => {
  const variants = {
    success: {
      container:
        "border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300",
      icon: CheckCircle,
    },

    error: {
      container:
        "border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300",
      icon: XCircle,
    },

    warning: {
      container:
        "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-300",
      icon: AlertTriangle,
    },

    info: {
      container:
        "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300",
      icon: Info,
    },
  };

  const currentVariant = variants[variant] || variants.info;
  const Icon = currentVariant.icon;

  return (
    <div
      role="alert"
      className={`
        flex
        items-start
        gap-3
        rounded-lg
        border
        p-4
        ${currentVariant.container}
        ${className}
      `}
    >
      {/* Icon */}
      {showIcon && (
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      )}

      {/* Content */}
      <div className="min-w-0 flex-1">
        {title && (
          <h3 className="text-sm font-semibold">
            {title}
          </h3>
        )}

        {message && (
          <p className={title ? "mt-1 text-sm" : "text-sm"}>
            {message}
          </p>
        )}

        {children}
      </div>

      {/* Close */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close alert"
          className="shrink-0 rounded-md p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;