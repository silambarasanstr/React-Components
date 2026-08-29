
import { CalendarDays, X } from "lucide-react";

const DateFilter = ({
  fromDate = "",
  toDate = "",
  onFromDateChange,
  onToDateChange,
  onClear,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      {/* From Date */}
      <div className="relative">
        <CalendarDays
          size={16}
          className="absolute text-gray-400 -translate-y-1/2 pointer-events-none left-3 top-1/2"
        />

        <input
          type="date"
          value={fromDate}
          max={toDate || undefined}
          onChange={(e) => onFromDateChange(e.target.value)}
          className="h-10 pr-3 text-sm text-gray-700 transition bg-white border border-gray-200 rounded-md outline-none pl-9 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          aria-label="From date"
        />
      </div>

      {/* To Date */}
      <div className="relative">
        <CalendarDays
          size={16}
          className="absolute text-gray-400 -translate-y-1/2 pointer-events-none left-3 top-1/2"
        />

        <input
          type="date"
          value={toDate}
          min={fromDate || undefined}
          onChange={(e) => onToDateChange(e.target.value)}
          className="h-10 pr-3 text-sm text-gray-700 transition bg-white border border-gray-200 rounded-md outline-none pl-9 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          aria-label="To date"
        />
      </div>

      {/* Clear */}
      {(fromDate || toDate) && (
        <button
          type="button"
          onClick={onClear}
          className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <X size={16} />
          Clear
        </button>
      )}
    </div>
  );
};

export default DateFilter;

