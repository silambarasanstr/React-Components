const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  error,
}) => {
  return (
    <div className="w-full mb-3">
      {label && (
        <label className="block mb-1 text-xs font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 text-sm ${
              disabled
                ? "cursor-not-allowed text-gray-400"
                : "cursor-pointer text-gray-700"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              disabled={disabled}
              className="h-4 w-4 accent-blue-600"
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default RadioGroup;