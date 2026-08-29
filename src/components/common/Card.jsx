const Card = ({
  children,
  title,
  description,
  header,
  footer,
  padding = true,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-xl
        border border-gray-200
        bg-white
        shadow-sm
        dark:border-gray-800
        dark:bg-gray-900
        ${className}
      `}
    >
      {/* Header */}
      {(title || description || header) && (
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
          {header ? (
            header
          ) : (
            <div>
              {title && (
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              )}

              {description && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={padding ? "p-4" : ""}>{children}</div>

      {/* Footer */}
      {footer && (
        <div className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;