import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/common/form/Input";
import Button from "../components/common/Button";
import { validateRegister } from "../validators/authValidator";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegister(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Register:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-200 border">
      <div className="w-full max-w-sm p-5 bg-white border border-gray-200 shadow-lg rounded-xl">
        {/* Header */}
        <div className="mb-5 text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 text-xl text-white bg-blue-600 shadow rounded-xl">
            💰
          </div>

          <h1 className="text-xl font-bold text-gray-800">Project Name</h1>

          <p className="mt-1 text-xs text-gray-500">Login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            required
          />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        {/* Back to Login */}
        <div className="mt-5 text-center">
          <p className="text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#0d61fd] hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
