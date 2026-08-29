import { useState } from "react";
import Input from "../components/common/form/Input";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 border bg-gradient-to-br from-slate-100 via-white to-blue-100">
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
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
