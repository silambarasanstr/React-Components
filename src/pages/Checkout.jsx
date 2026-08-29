import { useState } from "react";
import CustomerInformation from "../components/ecommerce/checkout/CustomerInformation";
import ShippingForm from "../components/ecommerce/checkout/ShippingForm";
import PaymentMethod from "../components/ecommerce/checkout/PaymentMethod";
import OrderSummary from "../components/ecommerce/checkout/OrderSummary";

const Checkout = () => {
  const [customerData, setCustomerData] = useState({});
  const [shippingData, setShippingData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const cartItems = [
    {
      id: 1,
      image: "https://picsum.photos/300/300?1",
      title: "Premium Cotton Shirt",
      price: 1299,
      quantity: 2,
      variant: "Size: M",
    },
  ];

  const handleCustomerSubmit = (data) => {
    setCustomerData(data);
  };

  const handleShippingSubmit = (data) => {
    setShippingData(data);
  };

  const handlePlaceOrder = () => {
    const orderData = {
      customer: customerData,
      shippingAddress: shippingData,
      paymentMethod,
      items: cartItems,
    };

    console.log("Order:", orderData);
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Checkout</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Checkout Details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Customer Information */}
          <div className="p-5 bg-white border rounded-lg">
            <CustomerInformation onSubmit={handleCustomerSubmit} />
          </div>

          {/* Shipping Address */}
          <div className="p-5 bg-white border rounded-lg">
            <ShippingForm onSubmit={handleShippingSubmit} />
          </div>

          {/* Payment Method */}
          <div className="p-5 bg-white border rounded-lg">
            <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary
            items={cartItems}
            shipping={0}
            discount={200}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
