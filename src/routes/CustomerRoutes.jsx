import { Routes, Route, Navigate } from "react-router-dom";

import CustomerLayout from "@/layouts/CustomerLayout";
import CustomerDashboard from "@/components/pages/Customer/CustomerDashboard";

export default function CustomerRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<CustomerLayout />}
      >

        <Route
          path="dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          index
          element={
            <Navigate
              to="dashboard"
              replace
            />
          }
        />

      </Route>

    </Routes>
  );
}