import { useState } from "react";
import Modal from "./Modal";

const initialForm = {
  name: "",
  email: "",
  salaryStructure: {
    basicSalary: "",
  },
};

export default function AddEmployeeModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  // Normal fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Nested salaryStructure fields
  const handleSalaryChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      salaryStructure: {
        ...prev.salaryStructure,
        [name]: value === "" ? "" : Number(value),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Form Data:", formData);

    // Simulate API/save operation
    setTimeout(() => {
      setFormData(initialForm);
      setLoading(false);
      onClose();
    }, 1000);
  };

  const handleQuickFill = () => {
    setFormData({
      name: "John Doe",
      email: "john.doe@example.com",
      salaryStructure: {
        basicSalary: 50000,
      },
    });
  };

  return (
    <Modal title="Add Employee" isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Employee Details */}
        <div className="p-3 border border-gray-200 rounded-md">
          <div className="grid grid-cols-2 gap-3">

            <div>
              <label className="block mb-1 text-xs font-medium">
                Employee Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-8 px-2 text-sm border border-gray-300 rounded outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-8 px-2 text-sm border border-gray-300 rounded outline-none focus:border-emerald-500"
              />
            </div>

          </div>
        </div>

        {/* Salary */}
        <div className="p-3 border border-gray-200 rounded-md">
          <h3 className="mb-2 text-sm font-semibold">
            Salary Structure
          </h3>

          <div className="grid grid-cols-3 gap-3">

            <div>
              <label className="block mb-1 text-xs font-medium">
                Basic Salary
              </label>

              <input
                type="number"
                name="basicSalary"
                value={formData.salaryStructure.basicSalary}
                onChange={handleSalaryChange}
                required
                min="0"
                className="w-full h-8 px-2 text-sm border border-gray-300 rounded outline-none focus:border-emerald-500"
              />
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">

          <button
            type="button"
            onClick={onClose}
            className="rounded border border-gray-300 px-3 py-1.5 text-sm"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleQuickFill}
            className="rounded bg-emerald-600 px-3 py-1.5 text-sm text-white"
          >
            Quick Fill
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded bg-emerald-600 px-3 py-1.5 text-sm text-white disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Employee"}
          </button>

        </div>
      </form>
    </Modal>
  );
}