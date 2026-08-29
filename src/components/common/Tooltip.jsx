import { useEffect, useRef, useState } from "react";

const Tooltip = ({
  children,
  content,
  position = "top",
  delay = 200,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  const showTooltip = () => {
    if (disabled || !content) return;

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const positionStyles = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
  };

  const arrowStyles = {
    top: "left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900",
    bottom:
      "left-1/2 bottom-full -translate-x-1/2 border-x-4 border-b-4 border-x-transparent border-b-gray-900",
    left: "left-full top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900",
    right:
      "right-full top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-gray-900",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={`
            pointer-events-none
            absolute
            z-50
            whitespace-nowrap
            rounded-md
            bg-gray-900
            px-2.5
            py-1.5
            text-xs
            font-medium
            text-white
            shadow-lg
            ${positionStyles[position]}
          `}
        >
          {content}

          <span
            className={`
              absolute
              h-0
              w-0
              border-solid
              ${arrowStyles[position]}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;