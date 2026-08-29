import { useState } from "react";

const CustomerInformation = ({
  initialValues = {},
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    name: initialValues.name || "",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
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
          Customer Information
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter your contact information.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 text-sm transition border rounded-md outline-none focus:border-black"
          />
        </div>
      </div>

    
    </form>
  );
};

export default CustomerInformation;