import {
  MapPin,
  Package,
  CreditCard,
} from "lucide-react";

const OrderDetails = ({
  order,
  onCancel,
  onContinueShopping,
}) => {
  if (!order) {
    return (
      <div className="p-6 text-center bg-white border rounded-lg">
        <p className="text-sm text-gray-500">
          Order details not found.
        </p>
      </div>
    );
  }

  const {
    orderId,
    _id,
    status = "Pending",
    items = [],
    shippingAddress = {},
    paymentMethod = "COD",
    subtotal = 0,
    shipping = 0,
    discount = 0,
    total = 0,
  } = order;

  const displayOrderId = orderId || _id;

  const formatPrice = (value) => {
    return Number(value || 0).toLocaleString("en-IN");
  };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-700";

      case "cancelled":
      case "canceled":
        return "bg-red-100 text-red-700";

      case "shipped":
        return "bg-blue-100 text-blue-700";

      case "processing":
        return "bg-purple-100 text-purple-700";

      case "pending":
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const isCancelled =
    status?.toLowerCase() === "cancelled" ||
    status?.toLowerCase() === "canceled";

  return (
    <div className="space-y-4">

      {/* Order Header */}
      <div className="p-5 bg-white border rounded-lg">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Order Details
            </h2>

            {displayOrderId && (
              <p className="mt-1 text-sm text-gray-500">
                Order ID: #{displayOrderId}
              </p>
            )}
          </div>

          <span
            className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
              status
            )}`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-5 bg-white border rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Package size={18} className="text-gray-600" />

          <h3 className="font-semibold text-gray-900">
            Order Items
          </h3>
        </div>

        <div className="divide-y">
          {items.length > 0 ? (
            items.map((item, index) => {
              const itemId =
                item.id || item._id || `item-${index}`;

              const quantity = Number(item.quantity || 1);
              const price = Number(item.price || 0);
              const itemTotal = price * quantity;

              return (
                <div
                  key={itemId}
                  className="flex gap-4 py-4"
                >
                  <img
                    src={
                      item.image ||
                      "/images/placeholder.jpg"
                    }
                    alt={item.title || "Product"}
                    className="object-cover w-20 h-20 rounded-md"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">
                      {item.title || "Product"}
                    </h4>

                    {item.variant && (
                      <p className="mt-1 text-sm text-gray-500">
                        {item.variant}
                      </p>
                    )}

                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {quantity}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      ₹{formatPrice(price)} each
                    </p>
                  </div>

                  <p className="font-medium text-gray-900">
                    ₹{formatPrice(itemTotal)}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="py-4 text-sm text-gray-500">
              No items found.
            </p>
          )}
        </div>
      </div>

      {/* Shipping & Payment */}
      <div className="grid gap-4 md:grid-cols-2">

        {/* Shipping Address */}
        <div className="p-5 bg-white border rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-gray-600" />

            <h3 className="font-semibold text-gray-900">
              Shipping Address
            </h3>
          </div>

          <div className="space-y-1 text-sm text-gray-600">
            {shippingAddress.name && (
              <p className="font-medium text-gray-900">
                {shippingAddress.name}
              </p>
            )}

            {shippingAddress.address && (
              <p>{shippingAddress.address}</p>
            )}

            {(shippingAddress.city ||
              shippingAddress.state) && (
              <p>
                {shippingAddress.city}
                {shippingAddress.city &&
                  shippingAddress.state &&
                  ", "}
                {shippingAddress.state}
              </p>
            )}

            {shippingAddress.pincode && (
              <p>
                PIN: {shippingAddress.pincode}
              </p>
            )}

            {shippingAddress.phone && (
              <p>
                Phone: {shippingAddress.phone}
              </p>
            )}
          </div>
        </div>

        {/* Payment Information */}
        <div className="p-5 bg-white border rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard size={18} className="text-gray-600" />

            <h3 className="font-semibold text-gray-900">
              Payment Information
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            Payment Method
          </p>

          <p className="mt-1 font-medium text-gray-900">
            {paymentMethod}
          </p>
        </div>
      </div>

      {/* Price Summary */}
      <div className="p-5 bg-white border rounded-lg">
        <h3 className="mb-4 font-semibold text-gray-900">
          Price Summary
        </h3>

        <div className="space-y-3 text-sm">

          {/* Subtotal */}
          <div className="flex justify-between">
            <span className="text-gray-600">
              Subtotal
            </span>

            <span>
              ₹{formatPrice(subtotal)}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between">
            <span className="text-gray-600">
              Shipping
            </span>

            <span>
              {Number(shipping) === 0
                ? "Free"
                : `₹${formatPrice(shipping)}`}
            </span>
          </div>

          {/* Discount */}
          {Number(discount) > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">
                Discount
              </span>

              <span className="text-green-600">
                -₹{formatPrice(discount)}
              </span>
            </div>
          )}

          {/* Total */}
          <div className="pt-3 border-t">
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>

              <span>
                ₹{formatPrice(total)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      {(onCancel || onContinueShopping) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">

          {/* Cancel */}
          {onCancel && !isCancelled && (
            <button
              type="button"
              onClick={() => onCancel(order)}
              className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50"
            >
              Cancel Order
            </button>
          )}

          {/* Continue Shopping */}
          {onContinueShopping && (
            <button
              type="button"
              onClick={onContinueShopping}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
            >
              Continue Shopping
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;