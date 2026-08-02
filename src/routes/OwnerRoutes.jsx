import { Routes, Route, Navigate } from "react-router-dom";

import OwnerLayout from "@/layouts/OwnerLayout";
import OwnerDashboard from "@/components/pages/Owner/OwnerDashboard";
import Fleet from "@/components/pages/Owner/Fleet";

export default function OwnerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<OwnerLayout />}>
        
        {/* /owner/dashboard */}
        <Route
          path="dashboard"
          element={<OwnerDashboard />}
        />

        {/* Temporary routes */}
        <Route
          path="fleet"
          element={
            <Fleet />
          }
        />

        <Route
          path="drivers"
          element={
            <div className="p-10 text-3xl font-bold">
              Drivers
            </div>
          }
        />

        <Route
          path="bookings"
          element={
            <div className="p-10 text-3xl font-bold">
              Bookings
            </div>
          }
        />

        <Route
          path="tracking"
          element={
            <div className="p-10 text-3xl font-bold">
              Tracking
            </div>
          }
        />

        <Route
          path="earnings"
          element={
            <div className="p-10 text-3xl font-bold">
              Earnings
            </div>
          }
        />

        <Route
          path="analytics"
          element={
            <div className="p-10 text-3xl font-bold">
              Analytics
            </div>
          }
        />

        <Route
          path="settings"
          element={
            <div className="p-10 text-3xl font-bold">
              Settings
            </div>
          }
        />

        {/* If /owner is opened, go to dashboard */}
        <Route
          index
          element={<Navigate to="dashboard" replace />}
        />

      </Route>
    </Routes>
  );
}