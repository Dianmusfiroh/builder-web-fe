import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import {
  ChartBarSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

const adminMenus = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: ChartBarSquareIcon,
  },
  {
    label: "Scrapper",
    path: "/admin/scrapper/products",
    icon: CubeIcon,
  },
];

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--admin-sidebar-width",
      isCollapsed ? "6rem" : "16rem"
    );
  }, [isCollapsed]);

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-20 hidden border-r border-blue-gray-50 bg-white py-6 transition-all duration-300 lg:block ${
          isCollapsed ? "w-24 px-3" : "w-64 px-4"
        }`}
      >
        <div
          className={`mb-8 flex items-center ${
            isCollapsed ? "flex-col gap-4 px-0" : "justify-between gap-3 px-2"
          }`}
        >
          <img
            src={isCollapsed ? "/img/logo-icon.png" : "/img/logo4.png"}
            alt="Mitrascale"
            className={`${
              isCollapsed ? "h-12 max-w-12" : "h-20 max-w-[11rem]"
            } w-auto object-contain transition-all duration-300`}
          />
          <IconButton
            variant="outlined"
            color="blue-gray"
            size="sm"
            className="shrink-0 rounded-full bg-white"
            aria-label={isCollapsed ? "Tampilkan sidebar" : "Sembunyikan sidebar"}
            onClick={() => setIsCollapsed((current) => !current)}
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <ChevronLeftIcon className="h-4 w-4" />
            )}
          </IconButton>
        </div>

        <nav className="space-y-1">
          {adminMenus.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              title={isCollapsed ? label : undefined}
              className={({ isActive }) =>
                `flex items-center rounded-lg py-3 text-sm font-semibold transition-colors ${
                  isCollapsed ? "justify-center px-0" : "gap-3 px-3"
                } ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-blue-gray-600 hover:bg-blue-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      <nav className="sticky top-0 z-20 border-b border-blue-gray-50 bg-white px-4 py-3 lg:hidden">
        <div className="mb-3 flex items-center gap-2">
          <img src="/img/logo4.png" alt="Mitrascale" className="h-7 w-auto" />
          {/* <Typography className="text-sm font-bold text-gray-900"> */}
            {/* Admin Mitrascale */}
          {/* </Typography> */}
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {adminMenus.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "bg-blue-gray-50 text-blue-gray-700"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default AdminSidebar;
