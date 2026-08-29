import { useEffect, useRef, useState } from "react";
import { Columns3 } from "lucide-react";

const ColumnVisibility = ({
  columns,
  visibleColumns,
  setVisibleColumns,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleColumn = (key) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Columns3 size={16} />
        Columns
      </button>

      {/* Dropdown */}
      {showMenu && (
        <div className="absolute right-0 z-20 p-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-52">
          <p className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase">
            Show / Hide Columns
          </p>

          <div className="space-y-1">
            {columns.map((column) => (
              <label
                key={column.key}
                className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={Boolean(visibleColumns[column.key])}
                  onChange={() => toggleColumn(column.key)}
                  className="text-blue-600 border-gray-300 rounded  focus:ring-blue-500"
                />

                <span>{column.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnVisibility;