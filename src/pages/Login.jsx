import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            {message && (
              <p className="text-sm text-center">
                {message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
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

export default Login;