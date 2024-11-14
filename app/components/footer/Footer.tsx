"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);
  const HOVER_THRESHOLD = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setShowFooter(window.scrollY > scrollThreshold);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const distanceFromBottom = window.innerHeight - e.clientY;
      if (distanceFromBottom <= HOVER_THRESHOLD) {
        setShowFooter(true);
      } else {
        const scrollThreshold = window.innerHeight * 0.1;
        setShowFooter(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showFooter ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 h-12 bg-black/80 text-white px-4 flex items-center justify-between"
    >
      <div className="flex items-center space-x-4">
        <span className="text-green-400">Concursos Ganaderos</span>
        <span className="text-green-400 hidden sm:inline">- Transparencia y comodidad.</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden sm:flex space-x-4">
          <a href="/nosotros" className="text-white hover:text-green-400">Nosotros</a>
          <a href="/contacto" className="text-white hover:text-green-400">Contacto</a>
          <a href="/privacy" className="text-white hover:text-green-400">Privacy</a>
        </div>
        
        <div className="flex space-x-3">
          <a href="#" className="text-white hover:text-green-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-green-400">
            <FaTwitter size={20} />
          </a>
        </div>

        <button className="bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600 transition-colors">
          ADQUIERE
        </button>
      </div>
    </motion.div>
  );
};

export default Footer;