import OrderCard from "./OrderCard";

const OrderList = ({
  orders = [],
  onViewDetails,
  onCancel,
}) => {
  if (!orders.length) {
    return (
      <div className="p-6 text-center bg-white border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-500">No orders found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <OrderCard
          key={order._id || order.id}
          order={order}
          onViewDetails={onViewDetails}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
};

export default OrderList;