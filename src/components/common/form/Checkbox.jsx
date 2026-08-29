const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  error,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={`flex items-center gap-2 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded accent-blue-600 focus:ring-2 focus:ring-blue-200"
        />

        {label && (
          <span className="text-xs font-medium text-gray-700">
            {label}
          </span>
        )}
      </label>

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;