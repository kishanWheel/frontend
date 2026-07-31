import { useAuth } from "@/context/AuthContext";

export default function OwnerDashboard() {

  const { user } = useAuth();

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold text-slate-900">
        Owner Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome back,{" "}
        <span className="font-semibold text-slate-800">
          {user?.name || "Owner"}
        </span>
      </p>

    </div>
  );
}