"use client";

import { motion, MotionValue } from "framer-motion";

interface HeroContentProps {
  textY?: MotionValue<number>;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  textY,
  title = "Feria Fongal",
  subtitle = "Revolutionizing Livestock Management",
  className = ""
}) => {
  return (
    <motion.div
      className={`relative z-20 h-full flex flex-col items-center justify-center text-white px-4 ${className}`}
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
          {title}
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;