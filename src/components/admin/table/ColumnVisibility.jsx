import { Check, ChevronDown, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ColumnVisibility = ({
  columns = [],
  visibleColumns = [],
  onVisibilityChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = (key) => {
    if (visibleColumns.includes(key)) {
      // Don't allow hiding the last visible column
      if (visibleColumns.length === 1) return;

      onVisibilityChange(visibleColumns.filter((column) => column !== key));
    } else {
      onVisibilityChange([...visibleColumns, key]);
    }
  };

  const handleShowAll = () => {
    onVisibilityChange(columns.map((column) => column.key));
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 transition bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50"
      >
        <Eye size={17} />
        Columns
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 z-50 w-56 p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between px-2 py-2 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-800">
              Show Columns
            </span>

            <button
              type="button"
              onClick={handleShowAll}
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Show All
            </button>
          </div>

          {/* Columns */}
          <div className="mt-1 overflow-y-auto max-h-64">
            {columns.map((column) => {
              const isVisible = visibleColumns.includes(column.key);

              return (
                <button
                  key={column.key}
                  type="button"
                  onClick={() => handleToggle(column.key)}
                  className="flex items-center justify-between w-full px-2 py-2 text-sm text-left text-gray-700 transition rounded-md hover:bg-gray-50"
                >
                  <span>{column.label}</span>

                  {isVisible && <Check size={16} className="text-blue-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnVisibility;
