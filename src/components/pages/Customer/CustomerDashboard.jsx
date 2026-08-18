import { Truck, Tractor, Wallet, ClipboardList } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function CustomerDashboard() {
  const { user } = useAuth();

  const firstName = user?.name?.split(" ")[0] || "Customer";

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome, {firstName} 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Find vehicles, book trips, and manage your bookings.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Truck size={24} />
          </div>

          <p className="text-sm text-slate-500">
            Active Booking
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <ClipboardList size={24} />
          </div>

          <p className="text-sm text-slate-500">
            Total Trips
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            0
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <Wallet size={24} />
          </div>

          <p className="text-sm text-slate-500">
            Wallet Balance
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            ₹0
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <Tractor size={24} />
          </div>

          <p className="text-sm text-slate-500">
            Saved Vehicles
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            0
          </h2>
        </div>

      </div>

      {/* Services */}
      <div className="mt-8">

        <h2 className="mb-5 text-xl font-bold text-slate-900">
          Book a Service
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          {/* Trucks */}
          <div className="cursor-pointer rounded-2xl bg-blue-600 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Truck size={36} />

            <h3 className="mt-5 text-xl font-bold">
              Trucks
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Book trucks for transportation and logistics.
            </p>

            <button className="mt-5 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-blue-600">
              Explore Trucks
            </button>
          </div>

          {/* Tractors */}
          <div className="cursor-pointer rounded-2xl bg-green-600 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Tractor size={36} />

            <h3 className="mt-5 text-xl font-bold">
              Tractors
            </h3>

            <p className="mt-2 text-sm text-green-100">
              Rent tractors and agricultural vehicles.
            </p>

            <button className="mt-5 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-green-600">
              Explore Tractors
            </button>
          </div>

          {/* Equipment */}
          <div className="cursor-pointer rounded-2xl bg-orange-500 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Truck size={36} />

            <h3 className="mt-5 text-xl font-bold">
              Equipment
            </h3>

            <p className="mt-2 text-sm text-orange-100">
              Find agricultural equipment for your work.
            </p>

            <button className="mt-5 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-orange-600">
              Explore Equipment
            </button>
          </div>

        </div>

      </div>

      {/* Recent Booking */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recent Bookings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your latest vehicle bookings will appear here.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            View All
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <ClipboardList
            className="mx-auto text-slate-400"
            size={40}
          />

          <p className="mt-3 font-medium text-slate-600">
            No bookings yet
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Your booking history will appear here.
          </p>
        </div>

      </div>

    </div>
  );
}