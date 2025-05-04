import React from "react";

import { AuthContextType } from "@/types/auth-context";
import { User } from "@/types/user";
import { toast } from "sonner";

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  updateProfile: async () => {},
  deleteProfile: async () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserProfile(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUserProfile = async (token: string) => {
    console.log("Fetching user profile...");
    const response = await fetch("http://localhost:3000/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      setIsLoading(false);
      return;
    }
    logout();
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      toast.error("Login failed. Please try again.");
      throw new Error("Authentication error: login failed");
    }
    const { access_token } = await response.json();
    localStorage.setItem("token", access_token);
    setToken(access_token);
    toast.success("Logged in successfully.");
    await fetchUserProfile(access_token);
  };

  const register = async (username: string, email: string, password: string) => {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) {
      toast.error("Registration failed. Please try again.");
      throw new Error("Authentication error: registration failed");
    }
    await login(email, password);
  };

  const updateProfile = async (updateUserDto: Partial<User>) => {
    if (!token) throw new Error("Forbidden error: not authenticated");
    const response = await fetch("http://localhost:3000/auth/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateUserDto),
    });
    if (!response.ok) {
      toast.error("Failed to update profile. Please try again.");
      throw new Error("Authentication error: failed to update profile");
    }
    const updatedUser = await response.json();
    toast.success("Account updated successfully.");
    setUser(updatedUser);
  };

  const deleteProfile = async () => {
    if (!token) throw new Error("Forbidden error: not authenticated");
    const response = await fetch("http://localhost:3000/auth/profile", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      toast.error("Failed to delete profile. Please try again.");
      throw new Error("Authentication error: failed to delete profile");
    }
    toast.success("Account deleted successfully.");
    logout();
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        updateProfile,
        deleteProfile,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
