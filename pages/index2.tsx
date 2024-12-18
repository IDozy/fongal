"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Cambiado a next/navigation
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { HeroBackground } from "../app/components/Landing/Hero/HeroBackground";
import { HeroCow } from "../app/components/Landing/Hero/HeroCow";
import { HeroContent } from "../app/components/Landing/Hero/HeroContent";
import { Navigation } from "../app/components/Landing/Hero/Navigation/Navigation";
import PricingSection from "../app/components/PricingSection";
import styles from "@/app/styles/Hero.module.css";
import "@/app/styles/indexLanding.css";
import Image from "next/image";
import landscape from "@/public/landingImages/landscape.webp";
import animalLandscape from "@/public/landingImages/3t.webp";
import Link from "next/link";
import { Footer } from "../app/components/footer/Footer";



const LandingPage = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [showFooter, setShowFooter] = useState(false);
  
  // Create parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const cowY = useTransform(scrollY, [0, 500], [0, 50]);
  const textY = useTransform(scrollY, [0, 500], [0, 20]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);


   // Detectar la posición del mouse para mostrar el footer
   useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const mouseY = event.clientY;

      // Mostrar el footer si el mouse está cerca del borde inferior (20px del final)
      if (windowHeight - mouseY < 300) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
  const navConcursos = () => {
    setNavActive(false);
    router.push("/concursos");
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
    <div className="relative min-h-screen ">
      <div ref={containerRef} className="relative h-screen overflow-hidden flex flex-col">
        {/* Background Layer - z-index: 1 */}
        <motion.div
          className="absolute inset-0 z-10"
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
          <Link className="text-white text-2xl font-bold" 
              href="/"
              onClick={goHome}
            >
            Concursos Ganaderos
          </Link>
          <ul className="flex space-x-6 text-white">
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
                href="/concursos"
                onClick={navConcursos}
              >
                Concursos
            </Link>
            </li>
            <li>
            <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/participantes"
                onClick={navGanadores}
              >
                Campeones
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-200 transition-colors duration-300"
                href="/landing"
                onClick={navLandingPage}
              >
                Criadores
              </Link>
              {/* <a
                href="#"
                className="hover:text-green-200 transition-colors duration-300"
              >
                Company
              </a>*/}
            </li>


          </ul>
          <motion.button
            className="relative bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.nav>

           {/* Text Content Layer - z-index: 20 */}
    <motion.div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4"
      style={{ y: textY, marginTop: "-150px"}}
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
          CONCURSOS GANADEROS
        </motion.h1>
        <motion.p
          className="text-xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Resultados en tiempo real a solo un click
        </motion.p>
      </motion.div>
    </motion.div>

    {/* Cow Layer */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-30"
      style={{ y: cowY }}
    >
      <Image
        src={animalLandscape}
        alt="Cow Portrait"
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>

    {/* Botón */}
    <motion.div
      className="absolute z-40 bottom-32 left-0 right-0 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
       {/* <motion.button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300">
        ADQUIERE
      </motion.button>*/}
    </motion.div>

  </div>

        {/* Footer que aparece al acercarse el mouse al borde inferior */}
        {showFooter && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      )}
      
</div>

    
  );
};

export default LandingPage;
