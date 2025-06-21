"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolling
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setScrolled(window.scrollY > 10);
    };
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition backdrop-blur-md bg-black/70 ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-400">
          Flow6
        </Link>
        <div className="flex space-x-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition ${
                pathname === href
                  ? "text-indigo-400 underline underline-offset-4"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
