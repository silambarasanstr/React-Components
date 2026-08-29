import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({
  label = "Options",
  items = [],
  align = "left",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const alignment = {
    left: "left-0",
    right: "right-0",
  };

  const handleItemClick = (item) => {
    if (item.disabled) return;

    item.onClick?.(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block ${className}`}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 transition bg-white border border-gray-300 rounded-lg shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        {label}

        <ChevronDown
          size={16}
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Menu */}
      {isOpen && (
        <div
          className={`
            absolute
            z-50
            mt-2
            min-w-44
            overflow-hidden
            rounded-lg
            border
            border-gray-200
            bg-white
            py-1
            shadow-lg
            ${alignment[align] || alignment.left}
          `}
        >
          {items.map((item, index) => (
            <button
              key={item.id || index}
              type="button"
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
              className={`
                flex
                w-full
                items-center
                gap-2
                px-3
                py-2
                text-left
                text-sm
                transition
                ${
                  item.disabled
                    ? "cursor-not-allowed text-gray-400"
                    : "text-gray-700 hover:bg-gray-100"
                }
                ${
                  item.danger && !item.disabled
                    ? "text-red-600 hover:bg-red-50"
                    : ""
                }
              `}
            >
              {item.icon && (
                <span className="shrink-0">
                  {item.icon}
                </span>
              )}

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;