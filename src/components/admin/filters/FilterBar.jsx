const FilterBar = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between ${className}`}
    >
      {children}
    </div>
  );
};

export default FilterBar;
