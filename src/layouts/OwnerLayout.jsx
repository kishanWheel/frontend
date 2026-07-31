import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function OwnerLayout() {
  return (
    <div className="min-h-screen bg-slate-100">  
      <Sidebar />
      <main className="ml-72 min-h-screen">
        <Outlet />
      </main>

    </div>
  );
}