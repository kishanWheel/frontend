import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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

function Signup() {
  const location = useLocation();
  const role = location.state?.role || "customer";

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password,
          role,
        }
      );

      setMessage("Signup successful!");

      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your details to create an account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <Label>Name</Label>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
            </div>

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
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
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

export default Signup;