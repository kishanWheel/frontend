import { Routes, Route } from "react-router-dom";
import SplashScreen from "@/components/pages/Auth/SplashScreen";
import RoleSelection from "@/components/pages/Auth/ui/RoleSelection";
import SignupForm from "@/components/pages/Auth/SignupForm";
import LoginForm from "@/components/pages/Auth/ui/LoginForm";
import CustomerRoutes from "./CustomerRoutes";
import OwnerRoutes from "./OwnerRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/customer/*" element={<CustomerRoutes />} />
      <Route path="/owner/*" element={<OwnerRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
