import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
