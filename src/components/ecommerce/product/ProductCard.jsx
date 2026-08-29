import React from "react";
import { ShoppingCart, Heart, Star, Eye, Package } from "lucide-react";

const ProductCard = ({
  product,
  onAddToCart,
  onWishlist,
  onView,
  showDescription = true,
}) => {
  const {
    name,
    image,
    category,
    description,
    price,
    originalPrice,
    rating = 4.5,
    reviews = 0,
    inStock = true,
  } = product;

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm group rounded-xl hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-md left-3 top-3">
            -{discount}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => onWishlist?.(product)}
          className="absolute p-2 transition bg-white rounded-full shadow right-3 top-3 hover:bg-red-50"
        >
          <Heart size={18} className="text-gray-600" />
        </button>

        {/* Quick View */}
        <button
          onClick={() => onView?.(product)}
          className="absolute p-2 text-white transition rounded-full opacity-0 bottom-3 right-3 bg-black/70 group-hover:opacity-100"
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        {showDescription && (
          <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {rating}
            </span>
          </div>

          <span className="text-sm text-gray-400">({reviews} Reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">₹{price}</span>

          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2 text-sm">
          <Package size={16} />

          {inStock ? (
            <span className="font-medium text-green-600">In Stock</span>
          ) : (
            <span className="font-medium text-red-500">Out of Stock</span>
          )}
        </div>

        {/* Button */}
        <button
          disabled={!inStock}
          onClick={() => onAddToCart?.(product)}
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition
            ${
              inStock
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed bg-gray-200 text-gray-500"
            }`}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
