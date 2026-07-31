import { Routes, Route } from "react-router-dom";

import SplashScreen from "@/components/pages/Auth/SplashScreen";
import RoleSelection from "@/components/pages/Auth/ui/RoleSelection";
import SignupForm from "@/components/pages/Auth/SignupForm";
import LoginForm from "@/components/pages/Auth/ui/LoginForm";

import OwnerRoutes from "./OwnerRoutes";
import CustomerRoutes from "./CustomerRoutes";

function AppRoutes() {
  return (
    <Routes>

      {/* Initial Website */}
      <Route
        path="/"
        element={<SplashScreen />}
      />

      {/* Select Customer / Vehicle Owner */}
      <Route
        path="/role"
        element={<RoleSelection />}
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={<SignupForm />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<LoginForm />}
      />

      {/* Owner */}
      <Route
        path="/owner/*"
        element={<OwnerRoutes />}
      />

      {/* Customer */}
      <Route
        path="/customer/*"
        element={<CustomerRoutes />}
      />

    </Routes>
  );
}

export default AppRoutes;