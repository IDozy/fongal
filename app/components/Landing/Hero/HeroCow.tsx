import { motion } from 'framer-motion';
import styles from "@/app/styles/Hero.module.css";

export const HeroCow: React.FC = () => (
  <motion.div
    className={styles.cowLayer}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
  >
    <img
      src="/api/placeholder/800/600"
      alt="Cow Portrait"
      className={styles.cowImage}
    />
  </motion.div>
);