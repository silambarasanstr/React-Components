import { useState } from "react";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import HeaderSearch from "../common/HeaderSearch";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="bg-white border-b shadow-sm">
      {/* Top Header */}
      <div className="container px-5 mx-auto">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <h1 className="text-2xl font-bold ">React Reusable Components</h1>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden max-w-xl md:flex">
            <HeaderSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSearch={(value) => console.log("Search:", value)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden text-gray-600 hover:text-blue-600 sm:block"
            >
              <Heart size={21} />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-blue-600"
            >
              <ShoppingCart size={22} />

              <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -right-2 -top-2">
                2
              </span>
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="items-center hidden gap-2 text-gray-600 hover:text-blue-600 sm:flex"
            >
              <User size={21} />
              <span className="text-sm font-medium">Account</span>
            </Link>

            {/* Mobile Menu */}
            <button type="button" className="text-gray-600 md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-3 md:hidden">
          <div className="flex overflow-hidden border border-gray-300 rounded-lg">
            <HeaderSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSearch={(value) => console.log("Search:", value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
