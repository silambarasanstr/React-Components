import React from "react";
import ProductCard from "./ProductCard";
import EmptyState from "../../common/EmptyState";

const ProductGrid = ({
  products = [],
  title,
  description,
  onAddToCart,
  onWishlist,
  onView,
  showDescription = true,
  columns = 4,
}) => {
  const gridColumns = {
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4",
};

  if (products.length === 0) {
    return (
      <EmptyState
        title="No Products found"
        message="There are no products to display."
      />
    );
  }

  return (
    <section>
      {/* Heading */}

      {(title || description) && (
        <div className="flex items-end justify-between mb-6">
          <div>
            {title && (
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>
        </div>
      )}

      {/* Products */}
      <div className={`grid gap-6 ${gridColumns[columns]}`}>
        {products.map((product) => (
          <ProductCard
            key={product.id || product._id}
            product={product}
            onAddToCart={onAddToCart}
            onWishlist={onWishlist}
            onView={onView}
            showDescription={showDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
