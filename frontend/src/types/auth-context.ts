import { User } from "./user";

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  updateProfile: (updateUserDto: Partial<User>) => Promise<void>;
  deleteProfile: () => Promise<void>;
  logout: () => void;
}
