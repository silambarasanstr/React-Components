import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  X,
  FileText,
  SquareStack,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
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
    children: [
      {
        name: "Components",
        href: "/admin/admin-showcase/forms/components",
      },
      {
        name: "Example",
        href: "/admin/admin-showcase/forms/example",
      },
    ],
  },
  {
    name: "Modals",
    icon: SquareStack,
    href: "/admin/admin-showcase/modals",
    children: [
      {
        name: "Components",
        href: "/admin/admin-showcase/modals/components",
      },
      {
        name: "Example",
        href: "/admin/admin-showcase/modals/example",
      },
    ],
  },
];

export default function Sidebar({ mobileOpen, setMobileOpen, collapsed }) {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(
    location.pathname.startsWith("/admin/admin-showcase/data-table"),
  );

  const handleParentClick = (item) => {
    if (item.children) {
      setOpenMenu((prev) => (prev === item.name ? null : item.name));
    } else {
      setMobileOpen(false);
    }
  };

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
        <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-700 bg-slate-900 px-5">
          {!collapsed && <h2 className="text-lg font-bold">Logo & Name</h2>}

          <button onClick={() => setMobileOpen(false)} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2 px-3 py-5">
          {menus.map((item) => {
            const hasChildren = item.children?.length > 0;

            const isParentActive = hasChildren
              ? location.pathname.startsWith(item.href)
              : location.pathname === item.href;

            /*
             * Normal menu
             */
            if (!hasChildren) {
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `
                    flex items-center rounded-lg transition
                    ${
                      collapsed
                        ? "justify-center p-3"
                        : "w-full gap-3 px-4 py-3"
                    }
                    ${
                      isActive
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }
                    `
                  }
                >
                  <item.icon size={20} />

                  {!collapsed && <span>{item.name}</span>}
                </NavLink>
              );
            }

            /*
             * Dropdown menu
             */
            return (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => handleParentClick(item)}
                  className={`
                    flex w-full items-center rounded-lg transition
                    ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
                    ${
                      isParentActive
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }
                  `}
                >
                  <item.icon size={20} />

                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.name}</span>

                      {openMenu === item.name ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </>
                  )}
                </button>

                {/* Dropdown Children */}
                {!collapsed && openMenu === item.name && (
                  <div className="relative mt-2 ml-4 space-y-1 border-l border-slate-700/80 pl-4">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.name}
                        to={child.href}
                        end
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `
        group relative flex items-center rounded-md
        px-3 py-2.5 text-[13px] font-medium
        transition-all duration-200

        ${
          isActive
            ? "bg-slate-800 text-white shadow-sm"
            : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-200"
        }
        `
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {/* Active Indicator */}
                            <span
                              className={`
              absolute -left-[17px]
              h-6 w-0.5 rounded-full
              transition-all duration-200
              ${
                isActive
                  ? "bg-blue-500 opacity-100"
                  : "bg-transparent opacity-0"
              }
            `}
                            />

                            {/* Dot */}
                            <span
                              className={`
              mr-2.5 h-1.5 w-1.5 rounded-full
              transition-all duration-200
              ${
                isActive
                  ? "bg-blue-400"
                  : "bg-slate-600 group-hover:bg-slate-400"
              }
            `}
                            />

                            <span className="truncate">{child.name}</span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
