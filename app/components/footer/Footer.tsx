"use client"
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsappSquare } from "react-icons/fa";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { QuickLinks } from './QuickLinks';
import { SocialLinks } from './SocialLinks';
import { QUICK_LINKS, SOCIAL_LINKS } from './footerData';
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.contentGrid}>
      <div className={styles.brandSection}>
        <h3 className={styles.brandTitle}>Concursos Ganaderos</h3>
        <p className={styles.brandDescription}>
          Desde el registro hasta el podio, simplificamos cada paso.
        </p>
      </div>

      <QuickLinks links={QUICK_LINKS} />
      <SocialLinks links={SOCIAL_LINKS} />
    </div>
    
    <div className={styles.copyright}>
      <p>&copy; {currentYear} ConcursosGanaderos SaaS. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

  );
};