import { useState } from "react";
import { login } from "@/api/authApi";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

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

function LoginForm() {
  const navigate = useNavigate();

  // AuthContext
  const { login: saveUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setIsError(false);
    setLoading(true);

    try {

      // Call backend API
      const res = await login({
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      const { token, user } = res.data;


      // Make sure backend returned user and token
      if (!user || !token) {
        throw new Error(
          "Invalid login response from server"
        );
      }


      // Save user + token through AuthContext
      saveUser(user, token);


      setMessage("Login successful!");
      setIsError(false);


      // Redirect according to role
      if (user.role === "owner") {

        navigate("/owner/dashboard");

      } else if (user.role === "customer") {

        navigate("/customer/dashboard");

      } else if (user.role === "admin") {

        navigate("/admin/dashboard");

      } else {

        setIsError(true);
        setMessage("Unknown user role.");

      }

    } catch (error) {

      console.error("LOGIN ERROR:", error);

      setIsError(true);

      setMessage(
        error.response?.data?.message ||
        error.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <Card className="w-full max-w-md">

        <CardHeader>

          <CardTitle>
            Welcome Back
          </CardTitle>

          <CardDescription>
            Login to your Kishan Wheels account
          </CardDescription>

        </CardHeader>


        <CardContent>

          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >

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
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

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


            {/* Login Button */}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </Button>

          </form>


          {/* Signup */}

          <p className="mt-4 text-center text-sm">

            Don&apos;t have an account?{" "}

            <Link
              to="/role"
              className="font-medium underline"
            >
              Sign Up
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>
  );
}

export default LoginForm;