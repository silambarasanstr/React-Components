import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Categories from "../pages/Categories";
import CategoryProducts from "../pages/CategoryProducts";
import About from "../pages/About";
import Form from "../pages/Form";
import Employees from "../admin/Employees";
import Dashboard from "../admin/Dashboard";
import AdminLayout from "../components/admin/layout/AdminLayout";
import Settings from "../admin/Settings";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ComponentShowcase from "../pages/ComponentShowcase";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* <Route path="/categories" element={<CategoryProducts />} /> */}
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryProducts />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/showcase" element={<ComponentShowcase />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
