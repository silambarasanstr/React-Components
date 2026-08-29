const CategorySection = ({
  title = "Shop by Category",
  description = "Explore our popular categories",
  categories = [],
  onCategoryClick,
}) => {
  return (
    <section className="py-8">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick?.(category)}
            className="overflow-hidden text-left transition bg-white border border-gray-200 group rounded-xl hover:-translate-y-1 hover:shadow-md"
          >
            {/* Image */}
            <div className="overflow-hidden bg-gray-100 aspect-square">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900">
                {category.name}
              </h3>

              {category.productCount && (
                <p className="mt-1 text-xs text-gray-500">
                  {category.productCount} Products
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;