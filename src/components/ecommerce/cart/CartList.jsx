import CartItem from "./CartItem";

const CartList = ({
  items = [],
  onIncrease,
  onDecrease,
  onRemove,
  loading = false,
}) => {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <h3 className="text-sm font-semibold text-gray-900">
          Your cart is empty
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Add some products to your cart to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white px-4 shadow-sm sm:px-6">
      {items.map((item) => (
        <CartItem
          key={item._id || item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
          loading={loading}
        />
      ))}
    </div>
  );
};

export default CartList;