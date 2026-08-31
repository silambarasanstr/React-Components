import FilterSection from "./FilterSection";

const prices = [
  "Under ₹500",
  "₹500 - ₹1000",
  "Above ₹1000",
];

export default function PriceFilter() {
  return (
    <FilterSection title="PRICE">
      {prices.map((price) => (
        <label
          key={price}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="checkbox" />
          <span>{price}</span>
        </label>
      ))}
    </FilterSection>
  );
}