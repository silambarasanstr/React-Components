import Button from "../../common/Button";

const CartSummary = ({
  subtotal = 0,
  discount = 0,
  shipping = 0,
  onCheckout,
  checkoutText = "Proceed to Checkout",
  loading = false,
}) => {
  const total = subtotal - discount + shipping;

  const formatPrice = (value) =>
    `₹${Number(value).toLocaleString("en-IN")}`;

  return (
    <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-xl">
      <h2 className="text-base font-semibold text-gray-900">
        Order Summary
      </h2>

      <div className="mt-5 space-y-3">
        {/* Subtotal */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>

          <span className="font-medium text-gray-900">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Discount</span>

            <span className="font-medium text-green-600">
              -{formatPrice(discount)}
            </span>
          </div>
        )}

        {/* Shipping */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Shipping</span>

          <span className="font-medium text-gray-900">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>

        {/* Divider */}
        <div className="pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              Total
            </span>

            <span className="text-lg font-bold text-gray-900">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="mt-5">
        <Button
          type="button"
          className="w-full"
          onClick={onCheckout}
          disabled={loading || total <= 0}
        >
          {loading ? "Processing..." : checkoutText}
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;