"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Cambiado a next/navigation
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { HeroBackground } from "./components/Landing/Hero/HeroBackground";
import { HeroCow } from "./components/Landing/Hero/HeroCow";
import { HeroContent } from "./components/Landing/Hero/HeroContent";
import { Navigation } from "./components/Landing/Hero/Navigation/Navigation";
import PricingSection from "./components/PricingSection";
import styles from "@/app/styles/Hero.module.css";
import "@/app/styles/indexLanding.css";
import Image from "next/image";
import landscape from "@/public/landingImages/landscape.webp";
import animalLandscape from "@/public/landingImages/3t.webp";
import Link from "next/link";

const LandingPage = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Create parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const cowY = useTransform(scrollY, [0, 500], [0, 50]);
  const textY = useTransform(scrollY, [0, 500], [0, 20]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  /***************************Navegacion**************************************** */

  const router = useRouter();
  const [isNavActive, setNavActive] = useState(false);

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
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Background Layer - z-index: 1 */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
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
          <ul className="flex space-x-6 text-white">
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/participantes"
                onClick={navGanadores}
              >
                Participantes
              </Link>
              {/* <a
                href="#"
                className="hover:text-green-200 transition-colors duration-300"
              >
                Company
  </a>*/}
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-300"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-300"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-200 transition-colors duration-300"
              >
                App
              </a>
            </li>
          </ul>
          <motion.button
            className="relative bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.nav>

        {/* Text Content Layer - z-index: 20 */}
        <motion.div
          className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4"
          style={{ y: textY }}
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
              Feria Fongal
            </motion.h1>
            <motion.p
              className="text-xl md:text-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Revolutionizing Livestock Management
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cow Layer - z-index: 30 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30"
          style={{ y: cowY }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src={animalLandscape}
            alt="Cow Portrait"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>

        {/* Button Layer - Highest z-index: 40 */}
        <motion.div
          className="absolute z-40 bottom-32 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ADQUIERE
          </motion.button>
        </motion.div>
      </div>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default LandingPage;
