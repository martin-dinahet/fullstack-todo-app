import { useAuth } from "@/contexts/auth-context";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { LogOut, Moon, Sun, UserCircle } from "lucide-react";
import { ThemeToggleButton } from "./theme-toggle-button";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background">
      {/* Logo */}
      <Link
        to="/"
        className={cn(buttonVariants({ variant: "ghost" }), "text-xl font-semibold")}
        aria-label="Go to home"
      >
        Todo App
      </Link>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <ThemeToggleButton />
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {user?.username
                  ?.split(" ")
                  .map((n: string) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent side="bottom" align="end" className="w-64">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback>
                  {user?.username
                    ?.split(" ")
                    .map((n: string) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{user?.username}</p>
                <p className="text-xs text-muted-foreground">Signed in</p>
              </div>
            </div>

            <Separator className="my-4" />

            <ul className="flex flex-col gap-2 py-2">
              <li>
                <Link to="/profile">
                  <Button variant="ghost" className="w-full justify-start flex gap-2 items-center">
                    <UserCircle className="h-5 w-5" />
                    View profile
                  </Button>
                </Link>
              </li>

              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start flex gap-2 items-center text-red-600 hover:text-red-700"
                  onClick={() => logout()}
                >
                  <LogOut className="h-5 w-5" />
                  Log out
                </Button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
