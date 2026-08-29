import { IndianRupee } from "lucide-react";

const OrderSummary = ({ order }) => {
  if (!order) {
    return null;
  }

  const subtotal = order.items?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = order.shipping ?? 0;
  const discount = order.discount ?? 0;

  const total = subtotal + shipping - discount;

  return (
    <div className="p-5 bg-white border rounded-lg">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Order Summary
      </h2>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Subtotal</span>

          <span className="font-medium text-gray-900">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Shipping</span>

          <span className="font-medium text-gray-900">
            {shipping === 0
              ? "Free"
              : `₹${shipping.toLocaleString("en-IN")}`}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Discount</span>

            <span className="font-medium text-green-600">
              -₹{discount.toLocaleString("en-IN")}
            </span>
          </div>
        )}
      </div>

      <div className="my-4 border-t" />

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-gray-900">
          Total
        </span>

        <span className="text-xl font-bold text-gray-900">
          ₹{total.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;