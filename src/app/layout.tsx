import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Flow6 Solutions | AI Consulting",
  description: "AI automation services to power your business.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
