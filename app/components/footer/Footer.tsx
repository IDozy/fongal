"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

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
      className="fixed bottom-0 left-0 right-0 h-12 bg-black/80 text-white px-4"
      style={{ 
        zIndex: 50,
        pointerEvents: showFooter ? 'auto' : 'none'
      }}
    >
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-green-400 hover:text-green-300 cursor-pointer">
            Concursos Ganaderos
          </Link>
          <span className="text-green-400 hidden sm:inline">
            - Transparencia y comodidad
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex space-x-4">
            <Link 
              href="/nosotros" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              Contacto
            </Link>
            <Link 
              href="/privacy" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              Privacy
            </Link>
          </div>
          
          <div className="flex space-x-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-green-400 cursor-pointer"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          <Link 
            href="/adquiere" 
            className="bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:bg-green-600 transition-colors cursor-pointer"
          >
            ADQUIERE
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
