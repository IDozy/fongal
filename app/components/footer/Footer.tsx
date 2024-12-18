"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);
  const HOVER_THRESHOLD = 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setShowFooter(window.scrollY > scrollThreshold);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const distanceFromBottom = window.innerHeight - e.clientY;
      if (distanceFromBottom <= HOVER_THRESHOLD) {
        setShowFooter(true);
      } else {
        const scrollThreshold = window.innerHeight * 0.1;
        setShowFooter(window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}> Concursos Ganaderos</h3>
            <p className={styles.brandDescription}>
            Empowering competition with cutting-edge technology.
            </p>
          </div>
          
          <QuickLinks links={QUICK_LINKS} />
          <SocialLinks links={SOCIAL_LINKS} />
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} ConcursosGanaderos SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;