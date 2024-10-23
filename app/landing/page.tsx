"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Cambiado a next/navigation
import { useAnimation } from "framer-motion";
import { HeroBackground } from "../components/Landing/Hero/HeroBackground";
import { HeroCow } from "../components/Landing/Hero/HeroCow";
import { HeroContent } from "../components/Landing/Hero/HeroContent";
import { Navigation } from "../components/Landing/Hero/Navigation/Navigation";
import PricingSection from "../components/PricingSection";
import { motion } from "framer-motion";
import styles from "@/app/styles/Hero.module.css";
import '@/app/styles/indexLanding.css';

const LandingPage: React.FC = () => {
  const controls = useAnimation();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        {/* Background Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-green-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://source.unsplash.com/random/1920x1080?landscape,farm"
            alt="Farm Landscape"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        {/* Cow Layer */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src="https://source.unsplash.com/random/800x600?cow,portrait"
            alt="Cow Portrait"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
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
            <motion.button
              className="bg-white text-green-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.nav
          className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="text-white text-2xl font-bold">TRIBE</div>
          <ul className="flex space-x-6 text-white">
            <li><a href="#" className="hover:text-green-200 transition-colors duration-300">Product</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors duration-300">Company</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors duration-300">Community</a></li>
            <li><a href="#" className="hover:text-green-200 transition-colors duration-300">App</a></li>
          </ul>
          <button className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition duration-300">
            Join Us
          </button>
        </motion.nav>
      </div>

      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

export default LandingPage;