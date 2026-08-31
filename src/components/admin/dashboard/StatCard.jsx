import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendType = "up",
  className = "",
}) => {
  const isPositive = trendType === "up";

  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md ${className}`}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </h3>
        </div>

        {/* Icon */}
        {Icon && (
          <div className="flex items-center justify-center w-10 h-10 text-blue-600 rounded-lg bg-blue-50">
            <Icon size={20} />
          </div>
        )}
      </div>

      {/* Bottom */}
      {(trend || description) && (
        <div className="flex items-center gap-2 mt-4 text-sm">
          {trend && (
            <span
              className={`inline-flex items-center gap-1 font-medium ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {isPositive ? (
                <ArrowUpRight size={15} />
              ) : (
                <ArrowDownRight size={15} />
              )}

              {trend}
            </span>
          )}

          {description && <span className="text-gray-500">{description}</span>}
        </div>
      )}
    </div>
  );
};

export default StatCard;

// use

{/* <StatCard
  title="Active Employees"
  value="108"
  icon={UserCheck}
  trend="+8%"
  description="from last month"
  trendType="up"
/>; */}
