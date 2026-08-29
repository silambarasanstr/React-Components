import OrderItem from "./OrderItem";
import OrderStatus from "./OrderStatus";
import OrderSummary from "./OrderSummary";
import OrderActions from "./OrderActions";

const OrderCard = ({ order, onViewDetails, onCancel }) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">{order.id}</p>
          <p className="text-xs text-gray-500">{order.date}</p>
        </div>

        <OrderStatus status={order.status} />
      </div>

      <div className="mt-4 space-y-3">
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      <OrderSummary order={order} />

      <div className="mt-4">
        <OrderActions
          order={order}
          onViewDetails={onViewDetails}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
};

export default OrderCard;
