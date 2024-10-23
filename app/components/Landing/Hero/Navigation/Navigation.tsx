"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  const navLinks = [
    { href: "#", label: "Product" },
    { href: "#", label: "Company" },
    { href: "#", label: "Community" },
    { href: "#", label: "App" },
  ];

  return (
    <motion.nav
      className={`absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      {/* Logo/Brand */}
      <div className="text-white text-2xl font-bold">Concursos Ganaderos</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-green-200 transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        className="relative bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Us
      </motion.button>
    </motion.nav>
  );
};

export default Navigation;
