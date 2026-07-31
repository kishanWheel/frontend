import { useAuth } from "@/context/AuthContext";

export default function CustomerDashboard() {

  const { user } = useAuth();

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Customer Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome back,{" "}
        <span className="font-semibold text-slate-900">
          {user?.name || "Customer"}
        </span>
      </p>

    </div>
  );
}