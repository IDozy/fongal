import { motion } from "framer-motion";
import styles from "@/app/styles/Hero.module.css";

export const HeroBackground: React.FC = () => (
  <motion.div
    className={styles.backgroundLayer}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <img
      src="/api/placeholder/1920/1080"
      alt="Farm Landscape"
      className={styles.backgroundImage}
    />
  </motion.div>
);
