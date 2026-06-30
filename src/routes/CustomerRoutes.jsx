import { Routes, Route } from "react-router-dom";
import CustomerDashboard from "@/components/pages/Customer/CustomerDashboard";

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<CustomerDashboard />} />
    </Routes>
  );
}

export default CustomerRoutes;
