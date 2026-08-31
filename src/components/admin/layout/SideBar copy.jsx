import {
  LayoutDashboard,
  Users,
  Settings,
  X,
  FileText,
  SquareStack,
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
    name: "Showcase",
    icon: Settings,
    href: "/admin/admin-showcase",
  },
  {
  name: "Data Table",
  icon: Settings,
  href: "/admin/admin-showcase/data-table",
  children: [
    {
      name: "Basic Table",
      href: "/admin/admin-showcase/data-table/basic",
    },
    {
      name: "Data Table",
      href: "/admin/admin-showcase/data-table/data",
    },
    {
      name: "Sortable Table",
      href: "/admin/admin-showcase/data-table/sortable",
    },
    {
      name: "Search + Filter + Pagination",
      href: "/admin/admin-showcase/data-table/search-filter-pagination",
    },
    {
      name: "Selection Table",
      href: "/admin/admin-showcase/data-table/selection",
    },
  ],
},
  {
    name: "Forms",
    icon: FileText,
    href: "/admin/admin-showcase/forms",
  },
  {
    name: "Modals",
    icon: SquareStack,
    href: "/admin/admin-showcase/modals",
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
          fixed lg:sticky
          top-0 left-0
          z-50

          h-screen
          shrink-0
          overflow-y-auto

          bg-slate-900
          text-white
          transition-all
          duration-300

          ${collapsed ? "lg:w-20" : "lg:w-64"}
          w-64

          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-5 bg-slate-900 border-b border-slate-700">
          {!collapsed && <h2 className="text-lg font-bold">Payroll</h2>}

          <button onClick={() => setMobileOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-3 py-5 space-y-2">
          {menus.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                flex items-center rounded-lg transition
                ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3 w-full"}
                ${isActive ? "bg-slate-700 text-white" : "hover:bg-slate-800"}
                `
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
