import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OrderList from "../components/ecommerce/order/OrderList";
import OrderDetails from "../components/ecommerce/order/OrderDetails";
import EmptyOrders from "../components/ecommerce/order/EmptyOrders";

const Order = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    {
      _id: "ORD-1001",
      status: "Delivered",
      paymentMethod: "COD",

      items: [
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
      ],

      shippingAddress: {
        name: "Simbu",
        address: "Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600001",
        phone: "9876543210",
      },

      subtotal: 5097,
      shipping: 0,
      discount: 500,
      total: 4597,
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  // View order details
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  // Cancel order
  const handleCancel = (order) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?",
    );

    if (!confirmed) return;

    setOrders((prevOrders) =>
      prevOrders.map((item) =>
        item._id === order._id
          ? {
              ...item,
              status: "Cancelled",
            }
          : item,
      ),
    );

    setSelectedOrder((prev) =>
      prev
        ? {
            ...prev,
            status: "Cancelled",
          }
        : null,
    );
  };

  // Continue shopping
  const handleContinueShopping = () => {
    navigate("/products");
  };

  // Back to orders
  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="w-full max-w-6xl px-4 py-6 mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">My Orders</h1>

        <p className="mt-1 text-sm text-gray-500">
          View and manage your orders
        </p>
      </div>

      {/* Empty Orders */}
      {orders.length === 0 ? (
        <EmptyOrders onContinueShopping={handleContinueShopping} />
      ) : selectedOrder ? (
        /* Order Details */
        <div>
          <button
            type="button"
            onClick={handleBackToOrders}
            className="mb-4 text-sm font-medium text-gray-600 hover:text-black"
          >
            ← Back to Orders
          </button>

          <OrderDetails
            order={selectedOrder}
            onCancel={handleCancel}
            onContinueShopping={handleContinueShopping}
          />
        </div>
      ) : (
        /* Order List */
        <OrderList
          orders={orders}
          onViewDetails={handleViewDetails}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Order;
