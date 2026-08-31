import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function FilterSidebar() {
  return (
    <aside className="w-full overflow-hidden bg-white border border-gray-200 rounded shrink-0 md:w-64">
      {/* Header */}
      <div className="px-3 py-3 bg-blue-600">
        <h2 className="text-[15px] font-semibold text-white">
          Filters
        </h2>
      </div>

      {/* Filters */}
      <CategoryFilter />
      <PriceFilter />
    </aside>
  );
}