import CartList from "../components/ecommerce/cart/CartList";
import CartSummary from "../components/ecommerce/cart/CartSummary";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      image: "https://picsum.photos/300/300?1",
      title: "Premium Cotton Shirt",
      price: 1299,
      quantity: 2,
      variant: "Size: M",
    },
    {
      id: 2,
      image: "https://picsum.photos/300/300?2",
      title: "Running Shoes",
      price: 2499,
      quantity: 1,
      variant: "Size: 9",
    },
  ];

  const handleIncrease = (id) => {
    console.log("Increase:", id);
  };

  const handleDecrease = (id) => {
    console.log("Decrease:", id);
  };

  const handleRemove = (id) => {
    console.log("Remove:", id);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discount = 500;
  const shipping = 0;

  return (
    <div className="min-h-screen p-4 bg-gray-50 sm:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Shopping Cart</h1>

          <p className="mt-1 text-sm text-gray-500">
            Review your selected products.
          </p>
        </div>

        {/* Cart Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <CartList
              items={cartItems}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          </div>

          {/* Cart Summary */}
          <div>
            <CartSummary
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              onCheckout={() => console.log("Checkout")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
