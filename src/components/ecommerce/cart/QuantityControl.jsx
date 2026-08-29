import { Minus, Plus } from "lucide-react";

const QuantityControl = ({
  value = 1,
  min = 1,
  max,
  onChange,
  disabled = false,
  size = "md",
}) => {
  const sizeClasses = {
    sm: {
      button: "h-7 w-7",
      icon: 13,
      value: "min-w-7 text-xs",
    },
    md: {
      button: "h-9 w-9",
      icon: 15,
      value: "min-w-9 text-sm",
    },
    lg: {
      button: "h-11 w-11",
      icon: 18,
      value: "min-w-11 text-base",
    },
  };

  const currentSize = sizeClasses[size] ?? sizeClasses.md;

  const currentValue = Number(value) || min;
  const isMin = currentValue <= min;
  const isMax = max !== undefined && currentValue >= max;

  const handleDecrease = () => {
    if (disabled || isMin || !onChange) return;

    onChange(Math.max(min, currentValue - 1));
  };

  const handleIncrease = () => {
    if (disabled || isMax || !onChange) return;

    const nextValue = currentValue + 1;

    if (max !== undefined) {
      onChange(Math.min(max, nextValue));
      return;
    }

    onChange(nextValue);
  };

  return (
    <div
      className={`inline-flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white ${
        disabled ? "opacity-50" : ""
      }`}
    >
      {/* Decrease */}
      <button
        type="button"
        onClick={handleDecrease}
        disabled={disabled || isMin}
        aria-label="Decrease quantity"
        className={`${currentSize.button} flex items-center justify-center text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <Minus size={currentSize.icon} strokeWidth={2} />
      </button>

      {/* Quantity */}
      <span
        aria-live="polite"
        aria-label={`Quantity ${currentValue}`}
        className={`${currentSize.value} select-none text-center font-medium text-gray-900`}
      >
        {currentValue}
      </span>

      {/* Increase */}
      <button
        type="button"
        onClick={handleIncrease}
        disabled={disabled || isMax}
        aria-label="Increase quantity"
        className={`${currentSize.button} flex items-center justify-center text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40`}
      >
        <Plus size={currentSize.icon} strokeWidth={2} />
      </button>
    </div>
  );
};

export default QuantityControl;