import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import landscape from "@/public/landingImages/landscape.webp";

export const HeroBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
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
        priority
      />
    </motion.div>
  );
};

export default HeroBackground;