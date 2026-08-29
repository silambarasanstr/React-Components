import { CreditCard, Banknote } from "lucide-react";

const PaymentMethod = ({
  value = "COD",
  onChange,
  disabled = false,
}) => {
  const paymentMethods = [
    {
      id: "COD",
      title: "Cash on Delivery",
      description: "Pay when your order arrives",
      icon: Banknote,
    },
    {
      id: "ONLINE",
      title: "Online Payment",
      description: "Pay securely using online payment",
      icon: CreditCard,
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Payment Method
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose your preferred payment method.
        </p>
      </div>

      <div className="space-y-3">
        {paymentMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = value === method.id;

          return (
            <label
              key={method.id}
              className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition ${
                isSelected
                  ? "border-black bg-gray-50"
                  : "border-gray-200 hover:border-gray-400"
              } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={isSelected}
                onChange={() => onChange?.(method.id)}
                disabled={disabled}
                className="w-4 h-4"
              />

              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md">
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {method.title}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {method.description}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethod;