const Select = ({
  label,
  name,
  value = "",
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
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

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition-all duration-200
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }
          ${disabled ? "cursor-not-allowed bg-gray-100" : "bg-white"}
        `}
      >
        <option value="">{placeholder}</option>

        {options.map((option, index) => {
          const optionValue =
            typeof option === "string" ? option : option.value;

          const optionLabel =
            typeof option === "string" ? option : option.label;

          return (
            <option key={optionValue || index} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;