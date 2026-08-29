const OrderItem = ({ item }) => {
  if (!item) return null;

  const {
    image,
    title,
    price = 0,
    quantity = 1,
    variant,
  } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 last:border-b-0">
      {/* Product Image */}
      <div className="w-20 h-20 overflow-hidden bg-gray-100 rounded-lg shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">
          {title}
        </h4>

        {variant && (
          <p className="mt-1 text-xs text-gray-500">
            {variant}
          </p>
        )}

        <div className="flex items-center gap-3 mt-2 text-sm">
          <span className="font-medium text-gray-900">
            ₹{price.toLocaleString()}
          </span>

          <span className="text-gray-500">
            × {quantity}
          </span>
        </div>
      </div>

      {/* Item Total */}
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-gray-900">
          ₹{(price * quantity).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderItem;