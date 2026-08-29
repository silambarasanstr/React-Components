import { Search, X } from "lucide-react";

const SearchBox = ({
  value = "",
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  const handleClear = () => {
    onChange?.({ target: { value: "" } });
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Search
        size={18}
        className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-10 text-sm text-gray-700 transition bg-white border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;