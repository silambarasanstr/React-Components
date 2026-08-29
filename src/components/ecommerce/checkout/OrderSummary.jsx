const OrderSummary = ({
  items = [],
  subtotal = 0,
  shipping = 0,
  discount = 0,
  total,
  onPlaceOrder,
  loading = false,
}) => {
  const calculatedSubtotal =
    subtotal ||
    items.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );

  const calculatedTotal =
    total ?? calculatedSubtotal + shipping - discount;

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <div className="p-5 bg-white border rounded-lg">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Order Summary
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Review your order before placing it.
        </p>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id || item._id}
              className="flex gap-3 pb-4 border-b"
            >
              {/* Image */}
              <div className="w-16 h-16 overflow-hidden bg-gray-100 rounded-md shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </h3>

                {item.variant && (
                  <p className="mt-1 text-xs text-gray-500">
                    {item.variant}
                  </p>
                )}

                <p className="mt-1 text-xs text-gray-500">
                  Qty: {item.quantity || 1}
                </p>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {formatPrice(
                    item.price * (item.quantity || 1)
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="py-4 text-sm text-center text-gray-500">
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Price Details */}
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Subtotal</span>

          <span className="font-medium text-gray-900">
            {formatPrice(calculatedSubtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Shipping</span>

          <span className="font-medium text-gray-900">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Discount</span>

            <span className="font-medium text-green-600">
              -{formatPrice(discount)}
            </span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex items-center justify-between pt-5 mt-5 border-t">
        <span className="text-base font-semibold text-gray-900">
          Total
        </span>

        <span className="text-lg font-bold text-gray-900">
          {formatPrice(calculatedTotal)}
        </span>
      </div>

      {/* Place Order */}
      {onPlaceOrder && (
        <button
          type="button"
          onClick={onPlaceOrder}
          disabled={loading || items.length === 0}
          className="w-full px-4 py-3 mt-5 text-sm font-medium text-white transition bg-black rounded-md hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      )}
    </div>
  );
};

export default OrderSummary;