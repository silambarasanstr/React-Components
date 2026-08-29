const Switch = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  description,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {label && (
          <label
            htmlFor={name}
            className="block text-xs font-medium text-gray-700 cursor-pointer"
          >
            {label}
          </label>
        )}

        {description && (
          <p className="mt-0.5 text-xs text-gray-500">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        id={name}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() =>
          onChange({
            target: {
              name,
              checked: !checked,
            },
          })
        }
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full
          transition-colors duration-200
          ${
            checked
              ? "bg-blue-600"
              : "bg-gray-300"
          }
          ${
            disabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }
        `}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm
            transition-transform duration-200
            ${checked ? "translate-x-5" : "translate-x-0.5"}
          `}
        />
      </button>
    </div>
  );
};

export default Switch;