import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({
  label = "Options",
  items = [],
  align = "right",
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
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

  const handleItemClick = (item) => {
    if (item.disabled) return;

    item.onClick?.(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left ${className}`}
    >
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          inline-flex items-center gap-2
          rounded-lg
          border border-gray-300
          bg-white
          px-3 py-2
          text-sm font-medium
          text-gray-700
          shadow-sm
          transition
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-gray-200
          dark:hover:bg-gray-800
        "
      >
        {label}

        <ChevronDown
          className={`h-4 w-4 transition-transform ${
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
            rounded-lg
            border
            border-gray-200
            bg-white
            p-1
            shadow-lg
            dark:border-gray-700
            dark:bg-gray-900
            ${
              align === "left"
                ? "left-0"
                : "right-0"
            }
          `}
        >
          {items.length > 0 ? (
            items.map((item, index) => {
              const Icon = item.icon;

              return (
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
                    rounded-md
                    px-3
                    py-2
                    text-left
                    text-sm
                    transition
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    ${
                      item.danger
                        ? "text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  {Icon && <Icon className="h-4 w-4" />}

                  <span>{item.label}</span>
                </button>
              );
            })
          ) : (
            <p className="px-3 py-2 text-sm text-gray-500">
              No options
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;