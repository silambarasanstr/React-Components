const DatePicker = ({
  label,
  name,
  value,
  onChange,
  placeholder = "Select date",
  required = false,
  disabled = false,
  min,
  max,
  error,
}) => {
  return (
    <div className="w-full mb-3">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-xs font-medium text-gray-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type="date"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        min={min}
        max={max}
        className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm
          text-gray-700 outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }
          ${disabled ? "cursor-not-allowed bg-gray-100" : ""}
        `}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default DatePicker;