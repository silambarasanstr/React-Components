import React, { useState } from "react";

import Input from "../../components/common/form/Input";
import Select from "../../components/common/form/Select";
import RadioGroup from "../../components/common/form/RadioGroup";
import Switch from "../../components/common/form/Switch";
import DatePicker from "../../components/common/form/DatePicker";
import FileUpload from "../../components/common/form/FileUpload";
import Textarea from "../../components/common/form/Textarea";
import Button from "../../components/common/Button";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employeeId: "",
  department: "",
  designation: "",
  employmentType: "full-time",
  joiningDate: "",
  salary: "",
  address: "",
  profileImage: null,
  emailNotifications: true,
  status: true,
  notes: "",
};

const FormExample = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // --------------------------------
  // Common Change Handler
  // --------------------------------
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" || type === "switch" ? checked : value,
    }));

    // Clear field error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // --------------------------------
  // File Upload
  // --------------------------------
  const handleFileChange = (file) => {
    setForm((prev) => ({
      ...prev,
      profileImage: file,
    }));

    setErrors((prev) => ({
      ...prev,
      profileImage: "",
    }));
  };

  // --------------------------------
  // Validation
  // --------------------------------
  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.employeeId.trim()) {
      newErrors.employeeId = "Employee ID is required";
    }

    if (!form.department) {
      newErrors.department = "Please select a department";
    }

    if (!form.designation) {
      newErrors.designation = "Please select a designation";
    }

    if (!form.joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    }

    if (!form.salary) {
      newErrors.salary = "Salary is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    return newErrors;
  };

  // --------------------------------
  // Submit
  // --------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      // API call will come here
      console.log("Employee Data:", form);

      // Example:
      // await createEmployee(form);

      alert("Employee created successfully!");

      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Create employee error:", error);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------
  // Reset
  // --------------------------------
  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
  };

  // --------------------------------
  // Cancel
  // --------------------------------
  const handleCancel = () => {
    console.log("Cancel employee creation");
  };

  return (
    <div className="mx-auto max-w-5xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* =====================================
            PERSONAL INFORMATION
        ====================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">
              Personal Information
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Enter the employee's basic personal details.
            </p>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2">
            <Input
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
              error={errors.firstName}
            />

            <Input
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
              error={errors.lastName}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="employee@example.com"
              required
              error={errors.email}
            />

            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
              error={errors.phone}
            />
          </div>
        </section>

        {/* =====================================
            EMPLOYMENT INFORMATION
        ====================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">
              Employment Information
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Configure the employee's role and employment details.
            </p>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2">
            <Input
              label="Employee ID"
              name="employeeId"
              value={form.employeeId}
              onChange={handleChange}
              placeholder="EMP-001"
              required
              error={errors.employeeId}
            />

            <Select
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              options={[
                {
                  value: "engineering",
                  label: "Engineering",
                },
                {
                  value: "hr",
                  label: "Human Resources",
                },
                {
                  value: "finance",
                  label: "Finance",
                },
                {
                  value: "marketing",
                  label: "Marketing",
                },
                {
                  value: "sales",
                  label: "Sales",
                },
              ]}
              error={errors.department}
            />

            <Select
              label="Designation"
              name="designation"
              value={form.designation}
              onChange={handleChange}
              options={[
                {
                  value: "software-engineer",
                  label: "Software Engineer",
                },
                {
                  value: "senior-software-engineer",
                  label: "Senior Software Engineer",
                },
                {
                  value: "team-lead",
                  label: "Team Lead",
                },
                {
                  value: "manager",
                  label: "Manager",
                },
              ]}
              error={errors.designation}
            />

            <Input
              label="Monthly Salary"
              name="salary"
              type="number"
              value={form.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              required
              error={errors.salary}
            />

            <DatePicker
              label="Joining Date"
              name="joiningDate"
              value={form.joiningDate}
              onChange={handleChange}
              required
              error={errors.joiningDate}
            />
          </div>

          <div className="border-t border-slate-200 p-5">
            <RadioGroup
              label="Employment Type"
              name="employmentType"
              value={form.employmentType}
              onChange={handleChange}
              options={[
                {
                  value: "full-time",
                  label: "Full Time",
                },
                {
                  value: "part-time",
                  label: "Part Time",
                },
                {
                  value: "contract",
                  label: "Contract",
                },
                {
                  value: "intern",
                  label: "Intern",
                },
              ]}
            />
          </div>
        </section>

        {/* =====================================
            ADDRESS
        ====================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">Address</h2>

            <p className="mt-1 text-xs text-slate-500">
              Enter the employee's residential address.
            </p>
          </div>

          <div className="p-5">
            <Textarea
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter complete address..."
              rows={4}
              required
              error={errors.address}
            />
          </div>
        </section>

        {/* =====================================
            PROFILE & PREFERENCES
        ====================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">
              Profile & Preferences
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Upload profile information and configure preferences.
            </p>
          </div>

          <div className="space-y-5 p-5">
            <FileUpload
              label="Profile Image"
              name="profileImage"
              value={form.profileImage}
              onChange={handleFileChange}
              accept="image/png,image/jpeg"
              description="PNG or JPG up to 5MB"
              error={errors.profileImage}
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Switch
                label="Email Notifications"
                name="emailNotifications"
                checked={form.emailNotifications}
                onChange={handleChange}
                description="Receive employee related email notifications"
              />

              <Switch
                label="Employee Status"
                name="status"
                checked={form.status}
                onChange={handleChange}
                description="Enable or disable employee account"
              />
            </div>
          </div>
        </section>

        {/* =====================================
            NOTES
        ====================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">
              Additional Information
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Add optional notes about the employee.
            </p>
          </div>

          <div className="p-5">
            <Textarea
              label="Notes"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Enter additional notes..."
              rows={4}
            />
          </div>
        </section>

        {/* =====================================
            FORM ACTIONS
        ====================================== */}
        <section className="flex flex-wrap items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <Button type="button" variant="outline" onClick={handleCancel}>
            Cancel
          </Button>

          <Button type="button" variant="secondary" onClick={handleReset}>
            Reset
          </Button>

          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Saving..." : "Create Employee"}
          </Button>
        </section>
      </form>
    </div>
  );
};

export default FormExample;
