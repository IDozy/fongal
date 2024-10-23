"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import Image from "next/image";
import { HeroBackground } from "../components/Landing/Hero/HeroBackground";
import { HeroCow } from "../components/Landing/Hero/HeroCow";
import { HeroContent } from "../components/Landing/Hero/HeroContent";
import { Navigation } from "../components/Landing/Hero/Navigation/Navigation";
import PricingSection from "../components/PricingSection";
import styles from "@/app/styles/Hero.module.css";
import "@/app/styles/indexLanding.css";
import landscape from "@/public/landingImages/landscape.webp";
import animalLandscape from "@/public/landingImages/3t.webp";

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

  return (
    <div className="min-h-screen">
      <div ref={containerRef} className="relative h-screen overflow-hidden">
        {/* Background Layer - z-index: 1 */}
        <HeroBackground />

        {/* Navigation - Highest z-index: 50 */}
        <Navigation />

        {/* Text Content Layer - z-index: 20 */}
        <HeroContent
          textY={textY}
          title="Feria Fongal"
          subtitle="Revolutionizing Livestock Management"
        />

        {/* Cow Layer - z-index: 30 */}
        <HeroCow />

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
