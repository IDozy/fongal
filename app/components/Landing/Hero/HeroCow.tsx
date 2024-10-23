"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/app/styles/Hero.module.css";
import animalLandscape from "@/public/landingImages/3t.webp";

export const HeroCow: React.FC = () => {
  const { scrollY } = useScroll();
  const cowY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
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
  );
};

export default HeroCow;
