import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/form/Input";
import { validateLogin } from "../validators/authValidator";
import QuickLogin from "../components/auth/QuickLogin";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    console.log("Login:", form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            error={errors.password}
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#0d61fd] hover:underline"
            >
              Create one here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
