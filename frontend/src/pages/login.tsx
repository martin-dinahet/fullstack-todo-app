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

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <>
      <main className="flex w-full h-screen justify-center items-center">
        <Card className="min-w-[20rem]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome back!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3" onSubmit={(e: React.FormEvent) => handleLogin(e)}>
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
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="ghost" asChild>
              <Link to="/register">
                First time here? <span className="underline">Register</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
};
