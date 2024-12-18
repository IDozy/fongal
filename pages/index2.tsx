"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import landscape from "@/public/landingImages/landscape.webp";

const animals = [
  {
    id: 1,
    name: "Vaca Lechera Premium",
    image: "/landingImages/3t.webp",
    description: "Excelencia en producción láctea",
  },
  {
    id: 2,
    name: "Oveja Merino Selecta",
    image: "/landingImages/sheep.png",
    description: "Calidad superior en lana",
  },
  {
    id: 3,
    name: "Caballo Pura Sangre",
    image: "/landingImages/horse.png",
    description: "Elegancia y rendimiento",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnimal((prev) => (prev + 1) % animals.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Funciones de navegación
  const navGanadores = () => {
    setMobileMenuOpen(false);
    router.push("/participantes");
  };

  const navNosotros = () => {
    setMobileMenuOpen(false);
    router.push("/nosotros");
  };

  const navLandingPage = () => {
    setMobileMenuOpen(false);
    router.push("/landing");
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={landscape}
            alt="Landscape"
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div
            className="text-white text-2xl font-bold cursor-pointer"
            onClick={goHome}
          >
            🐄 Concursos Ganaderos
          </div>
          <ul className="hidden md:flex space-x-6 text-white">
            <li>
              <button
                onClick={navGanadores}
                className="hover:text-green-200 transition-colors duration-300"
              >
                Concursos
              </button>
            </li>
            <li>
              <button
                onClick={navLandingPage}
                className="hover:text-green-200 transition-colors duration-300"
              >
                Comunidad
              </button>
            </li>
            <li>
              <button
                onClick={navNosotros}
                className="hover:text-green-200 transition-colors duration-300"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={goHome}
                className="hover:text-green-200 transition-colors duration-300"
              >
                Contáctanos
              </button>
            </li>
          </ul>
          <button className="text-white md:hidden" onClick={toggleMobileMenu}>
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 text-white p-4 w-full">
              <ul className="flex flex-col space-y-4">
                <li>
                  <button
                    onClick={navGanadores}
                    className="hover:text-green-200 transition-colors duration-300"
                  >
                    Concursos
                  </button>
                </li>
                <li>
                  <button
                    onClick={navLandingPage}
                    className="hover:text-green-200 transition-colors duration-300"
                  >
                    Comunidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={navNosotros}
                    className="hover:text-green-200 transition-colors duration-300"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={goHome}
                    className="hover:text-green-200 transition-colors duration-300"
                  >
                    Contáctanos
                  </button>
                </li>
              </ul>
            </div>
          )}
        </motion.nav>

        {/* Hero Section */}
        <motion.div className="relative z-20 h-1/2 flex flex-col items-center justify-center text-white px-4">
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

        {/* Animal Slider */}
        <motion.div
          className="absolute inset-0 mt-15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="relative w-full h-full">
            {/* Ribbon de texto */}
            <motion.div
              className="absolute inset-0 z-40 sm:z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`ribbon-${currentAnimal}`}
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute bottom-1/4 left-0 right-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent py-4 transform -skew-y-2"
                >
                  <div className="max-w-4xl mx-auto px-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {animals[currentAnimal].name}
                    </h3>
                    <p className="text-lg">
                      {animals[currentAnimal].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Imagen del animal */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAnimal}
                className="absolute inset-0 z-30 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.2, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                {/* Contenedor con máscara */}
                <div
                  className="relative w-full h-full"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%)",
                    maskSize: "100% 100%",
                    WebkitMaskSize: "100% 100%",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                >
                  <Image
                    src={animals[currentAnimal].image}
                    alt={animals[currentAnimal].name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots de navegación */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-50">
              {animals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAnimal(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                    currentAnimal === index ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Action Button */}
            <motion.div
              className="absolute z-40 bottom-32 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.button
                className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  (window.location.href = "https://wa.me/965768311")
                } // Reemplaza con el número de teléfono
              >
                ADQUIERE
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
