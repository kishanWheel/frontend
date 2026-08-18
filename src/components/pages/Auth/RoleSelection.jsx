import { useNavigate } from "react-router-dom";
import { Truck, User } from "lucide-react";

function RoleSelection() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    navigate("/signup", {
      state: {
        role,
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

      <div className="w-full max-w-2xl">

        <h1 className="mb-3 text-center text-4xl font-bold">
          Welcome to Kishan Wheels
        </h1>

        <p className="mb-10 text-center text-slate-500">
          Choose how you want to use Kishan Wheels
        </p>


        <div className="grid gap-6 md:grid-cols-2">

          {/* Customer */}

          <button
            type="button"
            onClick={() => selectRole("customer")}
            className="
              group rounded-2xl bg-white p-8
              text-left shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <User size={32} />
            </div>

            <h2 className="text-2xl font-bold">
              Customer
            </h2>

            <p className="mt-2 text-slate-500">
              Book vehicles, tractors and equipment
              for your transportation needs.
            </p>

            <div className="mt-6 font-semibold text-blue-600">
              Continue as Customer →
            </div>

          </button>


          {/* Vehicle Owner */}

          <button
            type="button"
            onClick={() => selectRole("owner")}
            className="
              group rounded-2xl bg-white p-8
              text-left shadow-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <Truck size={32} />
            </div>

            <h2 className="text-2xl font-bold">
              Vehicle Owner
            </h2>

            <p className="mt-2 text-slate-500">
              Manage your vehicles, drivers,
              bookings and earnings.
            </p>

            <div className="mt-6 font-semibold text-green-600">
              Continue as Vehicle Owner →
            </div>

          </button>

        </div>

      </div>

    </div>
  );
}

export default RoleSelection;