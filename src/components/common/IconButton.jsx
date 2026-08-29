import { Loader2 } from "lucide-react";

const IconButton = ({
  icon: Icon,
  onClick,
  title,
  variant = "default",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const variants = {
    default:
      "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800",
    primary:
      "text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-950",
    success:
      "text-green-600 hover:bg-green-50 hover:text-green-700 dark:text-green-400 dark:hover:bg-green-950",
    danger:
      "text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950",
    warning:
      "text-yellow-600 hover:bg-yellow-50 hover:text-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-950",
  };

  const sizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      disabled={disabled || loading}
      aria-label={title}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        transition-colors
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        Icon && <Icon className="h-4 w-4" />
      )}
    </button>
  );
};

export default IconButton;