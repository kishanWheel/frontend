import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signup } from "@/api/authApi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function SignupForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // Role selected from RoleSelection
  const selectedRole = location.state?.role || "customer";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSignup = async (e) => {
    e.preventDefault();

    setMessage("");
    setIsError(false);
    setLoading(true);

    try {

      const res = await signup({
        name,
        email,
        password,
        role: selectedRole,
      });

      console.log("SIGNUP RESPONSE:", res.data);

      setMessage(
        "Account created successfully! Redirecting to login..."
      );

      setIsError(false);


      // IMPORTANT:
      // Signup does NOT automatically log the user in.
      // Send them to Login.
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {

      console.error("SIGNUP ERROR:", error);

      setIsError(true);

      setMessage(
        error.response?.data?.message ||
        "Signup failed"
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">

      <Card className="w-full max-w-md">

        <CardHeader>

          <CardTitle>
            Create Account
          </CardTitle>

          <CardDescription>
            Create your Kishan Wheels{" "}
            {selectedRole === "owner"
              ? "Vehicle Owner"
              : "Customer"}{" "}
            account
          </CardDescription>

        </CardHeader>


        <CardContent>

          <form
            onSubmit={handleSignup}
            className="space-y-4"
          >

            {/* Name */}

            <div className="space-y-2">

              <Label htmlFor="name">
                Full Name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>


            {/* Email */}

            <div className="space-y-2">

              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>


            {/* Password */}

            <div className="space-y-2">

              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>


            {/* Selected Role */}

            <div className="rounded-lg bg-slate-100 p-3 text-sm">

              Account Type:{" "}

              <span className="font-semibold capitalize">
                {selectedRole === "owner"
                  ? "Vehicle Owner"
                  : "Customer"}
              </span>

            </div>


            {/* Message */}

            {message && (
              <p
                className={`text-center text-sm ${
                  isError
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}


            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </Button>

          </form>


          <p className="mt-4 text-center text-sm">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium underline"
            >
              Login
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>
  );
}

export default SignupForm;