import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
  loading = false,
}) => {
  if (!item) return null;

  const {
    id,
    _id,
    image,
    title,
    name,
    price = 0,
    quantity = 1,
    variant,
  } = item;

  const productId = _id || id;
  const productName = title || name || "Product";

  const total = price * quantity;

  return (
    <div className="flex gap-4 border-b border-gray-200 py-4 last:border-b-0">
      {/* Product Image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        {image ? (
          <img
            src={image}
            alt={productName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="truncate text-sm font-semibold text-gray-900">
              {productName}
            </h3>

            {variant && (
              <p className="mt-1 text-xs text-gray-500">
                {variant}
              </p>
            )}

            <p className="mt-1 text-sm font-medium text-gray-700">
              ₹{price.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Remove */}
          <button
            type="button"
            onClick={() => onRemove?.(productId)}
            disabled={loading}
            aria-label={`Remove ${productName}`}
            className="rounded-md p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Trash2 size={17} />
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="mt-3 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center rounded-lg border border-gray-200">
            <button
              type="button"
              onClick={() => onDecrease?.(productId, quantity)}
              disabled={loading || quantity <= 1}
              aria-label="Decrease quantity"
              className="p-1.5 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Minus size={15} />
            </button>

            <span className="min-w-8 text-center text-sm font-medium text-gray-900">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => onIncrease?.(productId, quantity)}
              disabled={loading}
              aria-label="Increase quantity"
              className="p-1.5 text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus size={15} />
            </button>
          </div>

          {/* Total */}
          <p className="text-sm font-semibold text-gray-900">
            ₹{total.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;