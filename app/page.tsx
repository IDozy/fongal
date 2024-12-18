"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import landscape from "@/public/landingImages/landscape.webp";
import animalLandscape from "@/public/landingImages/3t.webp";
import { Footer } from "../app/components/footer/Footer";
import PricingSection from "./components/PricingSection";
import "@/app/styles/indexLanding.css";

const LandingPage = () => {
  const router = useRouter();
  const [isNavActive, setNavActive] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  /***************************Navegacion**************************************** */

  const navGanadores = () => {
    setNavActive(false);
    router.push("/participantes");
  };

  const navNosotros = () => {
    setNavActive(false);
    router.push("/nosotros");
  };

  const navLandingPage = () => {
    setNavActive(false);
    router.push("/landing");
  };

  const goHome = () => {
    setNavActive(false);
    router.push("/");
  };

  /*************************Fin Navegacion****************************************************************** */

  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        {/* Background Layer */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={landscape}
            alt="Cow Portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Navigation - Highest z-index: 50 */}
        <motion.nav
          className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-white text-2xl font-bold">
            Concursos Ganaderos
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/concursos"
                onClick={navGanadores}
              >
                Concursos
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/comunidad"
              >
                Comunidad
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/nosotros"
                onClick={navNosotros}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/contacto"
              >
                Contáctanos
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="text-white md:hidden"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 text-white p-4 w-full">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    className="hover:text-green-200 transition-colors duration-300"
                    href="/participantes"
                    onClick={navGanadores}
                  >
                    Concursos
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-green-200 transition-colors duration-300"
                    href="/comunidad"
                  >
                    Comunidad
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-green-200 transition-colors duration-300"
                    href="/nosotros"
                    onClick={navNosotros}
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-green-200 transition-colors duration-300"
                    href="/contacto"
                  >
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <motion.div
          className="relative z-20 h-1/2 flex flex-col items-center justify-center text-white px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Concursos Ganaderos
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Reconocemos tu dedicación y pasión por tus animales
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cow Image Layer */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          <Image
            src={animalLandscape}
            alt="Cow Portrait"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>

        {/* Action Button */}
        <motion.div
          className="absolute z-40 bottom-32 left-0 right-0 flex justify-center"
        >
          <motion.button
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300"
          >
            ADQUIERE
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
      <PricingSection />
    </div>
  );
};

export default LandingPage;
