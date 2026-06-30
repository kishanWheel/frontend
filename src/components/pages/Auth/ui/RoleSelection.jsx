import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Truck, ArrowRight, Check } from "lucide-react";

function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("customer");

  const roles = [
    {
      id: "customer",
      title: "Customer",
      description: "Book vehicles & track deliveries",
      icon: Package,
    },
    {
      id: "owner",
      title: "Vehicle Owner",
      description: "Manage fleet & earn revenue",
      icon: Truck,
    },
  ];

  const handleContinue = () => {
    navigate("/signup", { state: { role: selectedRole } });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="h-20 w-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
            <Truck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mt-5">Kishan Wheels</h1>
          <p className="text-slate-500 mt-2">Logistics &amp; Agriculture Marketplace</p>
        </div>

        <h2 className="text-center font-medium mb-6">Continue as</h2>

        <div className="space-y-4">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`cursor-pointer p-5 transition-all ${
                  selectedRole === role.id
                    ? "border-2 border-blue-600 shadow-md"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{role.title}</h3>
                      <p className="text-sm text-slate-500">{role.description}</p>
                    </div>
                  </div>
                  {selectedRole === role.id && (
                    <Check className="text-blue-600" />
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Button onClick={handleContinue} className="w-full mt-8 h-12 text-lg">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-center mt-6 text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RoleSelection;
