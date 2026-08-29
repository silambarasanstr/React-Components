import { useState } from "react";
import CustomerInformation from "./CustomerInformation";
import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

const CheckoutForm = ({
  items = [],
  shipping = 0,
  discount = 0,
  loading = false,
  onSubmit,
}) => {
  const [customerData, setCustomerData] = useState({});
  const [shippingData, setShippingData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("COD");

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
      items,
    };

    onSubmit?.(orderData);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Checkout Details */}
      <div className="space-y-6 lg:col-span-2">
        {/* Customer Information */}
        <div className="p-5 bg-white border rounded-lg">
          <CustomerInformation
            onSubmit={handleCustomerSubmit}
          />
        </div>

        {/* Shipping Address */}
        <div className="p-5 bg-white border rounded-lg">
          <ShippingForm
            onSubmit={handleShippingSubmit}
          />
        </div>

        {/* Payment Method */}
        <div className="p-5 bg-white border rounded-lg">
          <PaymentMethod
            value={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>
      </div>

      {/* Order Summary */}
      <div>
        <OrderSummary
          items={items}
          shipping={shipping}
          discount={discount}
          loading={loading}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default CheckoutForm;