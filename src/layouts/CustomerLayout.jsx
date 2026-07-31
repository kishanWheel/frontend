import { Outlet, useNavigate } from "react-router-dom";
import { LogOut, User, Truck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function CustomerLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "KW";

  return (
    <div className="min-h-screen bg-slate-100">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">

        <div className="flex h-20 items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white">
              <Truck size={23} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Kishan Wheels
              </h1>

              <p className="text-xs text-slate-500">
                Customer Portal
              </p>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">

            {/* User */}
            <div className="hidden items-center gap-3 sm:flex">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                {initials}
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {user?.name || "Customer"}
                </p>

                <p className="text-xs capitalize text-slate-500">
                  {user?.role || "Customer"}
                </p>
              </div>

            </div>

            {/* Profile Icon */}
            <button
              onClick={() => navigate("/customer/profile")}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
              title="Profile"
            >
              <User size={21} />
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
              title="Sign Out"
            >
              <LogOut size={20} />

              <span className="hidden text-sm font-medium md:block">
                Sign Out
              </span>
            </button>

          </div>

        </div>

      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

    </div>
  );
}