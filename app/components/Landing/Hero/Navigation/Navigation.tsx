import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Navigation.module.css";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "Company", href: "#" },
  { label: "Community", href: "#" },
  { label: "App", href: "#" },
];

export const Navigation: React.FC = () => {
  const router = useRouter();

  const handleJoinUs = () => {
    router.push("/home");
  };

  return (
    <motion.nav
      className={styles.navigation}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <div className={styles.logo}>Ganaderos</div>
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.joinButton} onClick={handleJoinUs}>
        Join Us
      </button>
    </motion.nav>
  );
};
