const Spinner = ({
  size = "md",
  variant = "primary",
  text,
  className = "",
}) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-3",
    xl: "h-10 w-10 border-4",
  };

  const variants = {
    primary: "border-blue-200 border-t-blue-600",
    white: "border-white/30 border-t-white",
    gray: "border-gray-200 border-t-gray-600",
    success: "border-green-200 border-t-green-600",
    danger: "border-red-200 border-t-red-600",
  };

  return (
    <div
      role="status"
      aria-label={text || "Loading"}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <span
        className={`
          inline-block
          rounded-full
          animate-spin
          ${sizes[size]}
          ${variants[variant]}
        `}
      />

      {text && (
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {text}
        </span>
      )}
    </div>
  );
};

export default Spinner;