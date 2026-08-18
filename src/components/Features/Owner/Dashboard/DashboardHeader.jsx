import { Bell, ChevronRight, IndianRupee } from "lucide-react";

export default function DashboardHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "KW";

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white px-8 py-4">
      {/* Left */}
      <div className="flex items-center gap-3 text-sm">
      </div>
      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Revenue */}
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-5 py-2">
          <IndianRupee
            size={18}
            className="text-green-600"
          /> 
          <span className="font-semibold text-green-600 ">
            18,900 today
          </span>
        </div>

        {/* Notification */}

        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200">

          <Bell size={22} />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-orange-500"></span>

        </button>

        {/* Profile */}

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-base font-bold text-white">

          {initials}

        </div>

      </div>

    </header>
  );
}