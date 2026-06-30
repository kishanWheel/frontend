import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Truck } from "lucide-react";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/role");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-green-600">
      <div className="h-24 w-24 rounded-3xl bg-white/20 flex items-center justify-center mb-6">
        <Truck className="h-12 w-12 text-white" />
      </div>

      <h1 className="text-4xl font-bold text-white">Kishan Wheels</h1>
      <p className="text-white/80 mt-2 text-lg">
        Logistics &amp; Agriculture Marketplace
      </p>

      <div className="mt-10 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
        <div className="h-2 w-2 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
        <div className="h-2 w-2 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default SplashScreen;
