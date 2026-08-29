const EmptyOrders = ({ onContinueShopping }) => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M20 7h-3V5a5 5 0 00-10 0v2H4a1 1 0 00-1 1v11a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5a3 3 0 016 0v2H9V5z"
          />
        </svg>
      </div>

      <h2 className="text-lg font-semibold text-gray-900">
        No orders found
      </h2>

      <p className="max-w-sm mt-1 text-sm text-gray-500">
        You haven't placed any orders yet. Start shopping to see your orders
        here.
      </p>

      {onContinueShopping && (
        <button
          type="button"
          onClick={onContinueShopping}
          className="mt-5 rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          Continue Shopping
        </button>
      )}
    </div>
  );
};

export default EmptyOrders;