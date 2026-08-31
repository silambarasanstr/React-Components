import FilterSection from "./FilterSection";

const categories = [
  "Electronics",
  "Clothing",
  "Accessories",
];

export default function CategoryFilter() {
  return (
    <FilterSection title="CATEGORY">
      {categories.map((category) => (
        <label
          key={category}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" />
          <span>{category}</span>
        </label>
      ))}
    </FilterSection>
  );
}