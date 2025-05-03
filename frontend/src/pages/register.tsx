import React from "react";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export const RegisterPage: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(username, email, password);
    navigate("/");
  };

  return (
    <>
      <main className="flex w-full h-screen justify-center items-center">
        <Card className="min-w-[20rem]">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Welcome!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3" onSubmit={(e: React.FormEvent) => handleRegister(e)}>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="John"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="●●●●●●●●●●●"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="ghost" asChild>
              <Link to="/login">
                Already have an account ? <span className="underline">Log In</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};
