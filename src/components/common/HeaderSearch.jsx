import { Search } from "lucide-react";

const HeaderSearch = ({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search products...",
  className = "",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full max-w-xl overflow-hidden border border-gray-300 rounded-lg ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 text-sm outline-none"
      />

      <button
        type="submit"
        className="px-4 py-2.5 text-white bg-blue-600 hover:bg-blue-700"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default HeaderSearch;