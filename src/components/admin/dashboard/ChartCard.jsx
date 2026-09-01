import { MoreVertical } from "lucide-react";

const ChartCard = ({
  title,
  subtitle,
  children,
  action,
  className = "",
}) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-4 py-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-0.5 text-xs text-gray-500">
              {subtitle}
            </p>
          )}
        </div>

        {action ? (
          action
        ) : (
          <button
            type="button"
            className="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label="Chart options"
          >
            <MoreVertical size={18} />
          </button>
        )}
      </div>

      {/* Chart */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;