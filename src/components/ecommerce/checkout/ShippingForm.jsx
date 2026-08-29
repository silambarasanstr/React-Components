import { useState } from "react";

const ShippingForm = ({ initialValues = {}, onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    name: initialValues.name || "",
    phone: initialValues.phone || "",
    address: initialValues.address || "",
    city: initialValues.city || "",
    state: initialValues.state || "",
    pincode: initialValues.pincode || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Shipping Address
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter the address where you want your order delivered.
        </p>
      </div>

      {/* Name & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Address
        </label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="House No, Street, Area"
          rows={3}
          required
          className="w-full px-3 py-2 text-sm transition border rounded-md outline-none resize-none focus:border-black"
        />
      </div>

      {/* City / State / Pincode */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Pincode
          </label>

          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            maxLength={6}
            inputMode="numeric"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;
