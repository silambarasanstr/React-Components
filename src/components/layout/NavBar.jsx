import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-sm font-medium text-gray-700"
    }`;

  return (
    <header className="bg-white shadow">
      <div className="container px-5 py-4 mx-auto">
        <nav className="flex flex-wrap items-center gap-6">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/products/:id" end className={linkClass}>
            Products Details
          </NavLink>

          <NavLink to="/categories" className={linkClass}>
            Categories
          </NavLink>

          <NavLink to="/category/:categoryName" className={linkClass}>
            Category Products
          </NavLink>

          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>

          <NavLink to="/checkout" className={linkClass}>
            Checkout
          </NavLink>

          <NavLink to="/order" className={linkClass}>
            Orders
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            Profile
          </NavLink>

          <NavLink to="/form" className={linkClass}>
            Form
          </NavLink>

          <NavLink to="/login" target="_blank" className={linkClass}>
            Login
          </NavLink>

          <NavLink to="/register" target="_blank" className={linkClass}>
            Register
          </NavLink>

          <NavLink to="/admin" target="_blank" className={linkClass}>
            Admin
          </NavLink>

          <NavLink to="/showcase" className={linkClass}>
            Showcase
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
