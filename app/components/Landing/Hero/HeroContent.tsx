import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Hero.module.css";
export const HeroContent: React.FC = () => {
  const controls = useAnimation();
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/home");
  };

  return (
    <div className={styles.contentLayer}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className={styles.contentWrapper}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Feria Fongal
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Revolutionizing Livestock Management
        </motion.p>
        <motion.button
          className={styles.ctaButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={handleGetStarted}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};
