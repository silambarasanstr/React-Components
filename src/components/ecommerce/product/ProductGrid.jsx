import React from "react";
import ProductCard from "./ProductCard";
import EmptyState from "../../common/EmptyState";

const ProductGrid = ({
  products = [],
  title,
  onAddToCart,
  onWishlist,
  onView,
  showDescription = true,
  columns = 4,
}) => {


 const gridColumns = {
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
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

      {title && (
        <h2 className="mb-5 text-xl font-semibold text-gray-900">{title}</h2>
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
