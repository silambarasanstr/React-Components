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

import Dashboard from "../admin/Dashboard";
import AdminLayout from "../components/admin/layout/AdminLayout";
import AdminShowcase from "../admin/AdminShowcase";
import FormsShowcase from "../admin/FormsShowcase";

import FormComponents from "../admin/form/FormComponents";
import FormExample from "../admin/form/FormExample";

import ModalsShowcase from "../admin/ModalsShowcase";
import BasicTableShowcase from "../admin/data-table/BasicTableShowcase";
import DataTableShowcase from "../admin/data-table/DataTableShowcase";
import SearchFilterPaginationShowcase from "../admin/data-table/SearchFilterPaginationShowcase";
import SelectionTableShowcase from "../admin/data-table/SelectionTableShowcase";
import SortableTableShowcase from "../admin/data-table/SortableTableShowcase";

import ModalComponents from "../admin/modal/ModalComponents";
import ModalExample from "../admin/modal/ModalExample";

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

          <Route path="admin-showcase" element={<AdminShowcase />} />

          <Route
            path="admin-showcase/data-table/basic"
            element={<BasicTableShowcase />}
          />

          <Route
            path="admin-showcase/data-table/data"
            element={<DataTableShowcase />}
          />

          <Route
            path="admin-showcase/data-table/sortable"
            element={<SortableTableShowcase />}
          />

          <Route
            path="admin-showcase/data-table/search-filter-pagination"
            element={<SearchFilterPaginationShowcase />}
          />

          <Route
            path="admin-showcase/data-table/selection"
            element={<SelectionTableShowcase />}
          />
          {/* <Route path="admin-showcase/forms" element={<FormsShowcase />} /> */}

          <Route
            path="/admin/admin-showcase/forms/components"
            element={<FormComponents />}
          />

          <Route
            path="/admin/admin-showcase/forms/example"
            element={<FormExample />}
          />

          <Route
            path="/admin/admin-showcase/modals/components"
            element={<ModalComponents />}
          />
          <Route
            path="/admin/admin-showcase/modals/example"
            element={<ModalExample />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
