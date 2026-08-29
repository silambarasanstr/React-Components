import {
  LayoutDashboard,
  Users,
  Briefcase,
  Calendar,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    name: "Employees",
    icon: Users,
    href: "/admin/employees",
  },

  {
    name: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function Sidebar({ mobileOpen, setMobileOpen, collapsed }) {
  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-screen
          bg-slate-900
          text-white
          transition-all
          duration-300
          z-50

          ${collapsed ? "lg:w-20" : "lg:w-64"}

          w-64

          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-700">
          {!collapsed && <h2 className="text-lg font-bold">Payroll</h2>}

          <button onClick={() => setMobileOpen(false)} className="lg:hidden">
            <X />
          </button>
        </div>

        {/* Menu */}

        <nav className="px-3 mt-5 space-y-2">
          {menus.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/admin"} // Only exact match for Dashboard
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center rounded-lg transition
        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3 w-full"}
        ${isActive ? "bg-slate-700 text-white" : "hover:bg-slate-800"}`
              }
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
