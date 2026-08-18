import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Truck,
  Users,
  ClipboardList,
  MapPinned,
  IndianRupee,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/owner/dashboard",
  },
  {
    title: "Fleet",
    icon: Truck,
    path: "/owner/fleet",
  },
  {
    title: "Drivers",
    icon: Users,
    path: "/owner/drivers",
  },
  {
    title: "Bookings",
    icon: ClipboardList,
    path: "/owner/bookings",
  },
  {
    title: "Tracking",
    icon: MapPinned,
    path: "/owner/tracking",
  },
  {
    title: "Earnings",
    icon: IndianRupee,
    path: "/owner/earnings",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/owner/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/owner/settings",
  },
];

export default function Sidebar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  // Get user's name
  const userName = user?.name || "User";

  // Get initials from user's name
  const initials = userName
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  // Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-700 bg-[#0F172A] text-white">

      {/* ================= LOGO ================= */}

      <div className="flex shrink-0 items-center gap-4 px-6 py-6">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
          <Truck size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold">
            Kishan Wheels
          </h1>

          <p className="text-sm text-slate-400">
            Owner Portal
          </p>
        </div>

      </div>


      {/* ================= NAVIGATION ================= */}

      <nav className="flex-1 overflow-y-auto px-3 py-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                group mb-2 flex items-center gap-4
                rounded-2xl px-5 py-4
                transition-all duration-300 ease-in-out

                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:translate-x-1 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >

              <Icon
                className="
                  h-6 w-6
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />

              <span className="text-lg font-medium">
                {item.title}
              </span>

            </NavLink>
          );
        })}

      </nav>


      {/* ================= PROFILE ================= */}

      <div className="shrink-0 border-t border-slate-700 p-6">

        <div className="mb-6 flex items-center gap-3">

          {/* User Initials */}

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-lg font-bold">

            {initials}

          </div>


          {/* User Information */}

          <div className="min-w-0">

            <h3 className="truncate font-semibold">
              {userName}
            </h3>

            <p className="text-sm capitalize text-slate-400">
              {user?.role || "Fleet Owner"}
            </p>

          </div>

        </div>


        {/* ================= LOGOUT ================= */}

        <button
          type="button"
          onClick={handleLogout}
          className="
            flex w-full items-center gap-3
            rounded-lg px-3 py-3
            text-slate-300
            transition-all duration-200
            hover:bg-red-500/10
            hover:text-red-400
          "
        >

          <LogOut size={22} />

          <span className="text-lg">
            Sign Out
          </span>

        </button>

      </div>

    </aside>
  );
}