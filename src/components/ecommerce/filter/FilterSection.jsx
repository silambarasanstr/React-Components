export default function FilterSection({ title, children }) {
  return (
    <div className="px-4 py-4 text-sm border-b border-gray-200 last:border-b-0">
      <h3 className="mb-3 font-semibold text-gray-800">
        {title}
      </h3>

      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
}