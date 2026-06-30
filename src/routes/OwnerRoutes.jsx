import { Routes, Route } from "react-router-dom";
import OwnerDashboard from "@/components/pages/Owner/OwnerDashboard";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<OwnerDashboard />} />
    </Routes>
  );
}

export default OwnerRoutes;
